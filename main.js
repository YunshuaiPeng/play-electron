const { app, BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // 开发环境使用 Vite 开发服务器
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173')
    // 打开开发工具
    win.webContents.openDevTools()
  } else {
    // 生产环境加载打包后的文件
    win.loadFile(path.join(__dirname, 'dist/index.html'))
  }
}

// 添加 IPC 处理程序来读取 BOM 文件
const { ipcMain } = require('electron')

ipcMain.handle('read-bom-files', async () => {
  const bomsDir = path.join(__dirname, 'boms')
  const files = await fs.promises.readdir(bomsDir)
  const bomData = []

  for (const file of files) {
    if (file.endsWith('.json')) {
      const content = await fs.promises.readFile(path.join(bomsDir, file), 'utf-8')
      try {
        const data = JSON.parse(content)
        bomData.push({
          name: data.name,
          filename: file
        })
      } catch (err) {
        console.error(`Error parsing ${file}:`, err)
      }
    }
  }

  return bomData
})

// 添加读取单个 BOM 文件的处理程序
ipcMain.handle('read-bom-file', async (event, filename) => {
  try {
    const filePath = path.join(__dirname, 'boms', filename)
    const content = await fs.promises.readFile(filePath, 'utf-8')
    return JSON.parse(content)
  } catch (err) {
    console.error(`Error reading file ${filename}:`, err)
    throw err
  }
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}) 
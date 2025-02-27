import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider
            router={router}
            future={{ v7_startTransition: true }}
        />
    </React.StrictMode>,
) 
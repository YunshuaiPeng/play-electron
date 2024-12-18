import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </FluentProvider>
  );
}

export default App; 
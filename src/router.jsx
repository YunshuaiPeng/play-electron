import React from 'react';
import { createHashRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import System from './pages/System';
import Bluetooth from './pages/Bluetooth';
import Network from './pages/Network';
import Personalization from './pages/Personalization';
import Apps from './pages/Apps';
import Account from './pages/Account';
import Time from './pages/Time';
import Gaming from './pages/Gaming';
import Accessibility from './pages/Accessibility';
import Privacy from './pages/Privacy';
import Update from './pages/Update';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'system',
        element: <System />,
      },
      {
        path: 'bluetooth',
        element: <Bluetooth />,
      },
      {
        path: 'network',
        element: <Network />,
      },
      {
        path: 'personalization',
        element: <Personalization />,
      },
      {
        path: 'apps',
        element: <Apps />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'time',
        element: <Time />,
      },
      {
        path: 'gaming',
        element: <Gaming />,
      },
      {
        path: 'accessibility',
        element: <Accessibility />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'update',
        element: <Update />,
      },
    ],
  },
]);

export default router; 
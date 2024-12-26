import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error('Failed to find the root element');
ReactDOM.createRoot(rootElement).render(_jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(App, {}) }) }));

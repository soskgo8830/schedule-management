import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style/index.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);

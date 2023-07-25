import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

import App from './App';

const createRoot = ReactDom.createRoot(document.getElementById('root'));

createRoot.render(<App/>)
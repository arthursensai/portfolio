import './index.css';
import App from './App.jsx';

import React from 'react';
import { hydrateRoot } from 'react-dom/client';

hydrateRoot(
  document.getElementById('root'),
  <App />
);

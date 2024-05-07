// INDEX.JSX
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import flags from './flags';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App flags={flags} />
  </React.StrictMode>
);

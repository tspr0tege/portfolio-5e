import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './src/App.js';

const root = createRoot(document.getElementById('app'));
root.render(<App />);

// render(<App />, document.getElementById('app'));
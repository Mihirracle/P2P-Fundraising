import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = document.getElementById('root');
const app = (
  <ThirdwebProvider activeChain={Sepolia}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);

const createRootApp = () => {
  const root = createRoot(document.getElementById('root'));
  root.render(app);
};

createRootApp();

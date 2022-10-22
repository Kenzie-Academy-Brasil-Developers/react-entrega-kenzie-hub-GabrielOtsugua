import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './contexts/userContext';
import { ToastContainer } from 'react-toastify';
import { TechContextProvider } from './contexts/techContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TechContextProvider>
        <Provider>
          <App />
          <ToastContainer />
        </Provider>
      </TechContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListTransContextProvider from "./Context/ListTransContext";
import ListWalletContextProvider from "./Context/ListWalletContext";

ReactDOM.render(
  <React.StrictMode>
    <ListWalletContextProvider>
        <ListTransContextProvider>
                <App />
        </ListTransContextProvider>
    </ListWalletContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

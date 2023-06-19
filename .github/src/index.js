import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from 'components/App/App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </Provider>
    </BrowserRouter>
);

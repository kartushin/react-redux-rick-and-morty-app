import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import { configureStore } from './redux/store';

const store = configureStore();

const renderApp = () => 
  render(
    <React.StrictMode>
      <Provider store={store} >
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

renderApp();
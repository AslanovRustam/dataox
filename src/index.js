import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from './components/redux/store';
import { Provider } from 'react-redux';

// import filterItem from './components/redux/actions';

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import store  from './app/store';
import { Provider } from 'react-redux';
import Todos from './components/to-do';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todos />
    </Provider>

  </React.StrictMode>,
  document.getElementById("root")
);

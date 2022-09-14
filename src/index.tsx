import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { api } from './api/GeneralApi';
import { App } from './App';

ReactDOM.render(
  <ApiProvider api={api}>
    <Router>
      <App />
    </Router>
  </ApiProvider>,

  document.getElementById('root'),
);

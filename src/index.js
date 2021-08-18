import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App/App';
import { FormDataContextProvider } from './store/form-data-context';
ReactDOM.render(
  <FormDataContextProvider>
    <App />
  </FormDataContextProvider>,
  document.getElementById('root')
);

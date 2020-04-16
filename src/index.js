import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './layouts/App';
import Firebase, { FirebaseContext } from './firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

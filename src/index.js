import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './layouts/App';
import firebase from 'firebase';
import { firebaseConfig } from './firebase';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

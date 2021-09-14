import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import 'firebase/firestore'
import 'firebase/firestore'
import * as firebase from "firebase/app";
import firebaseConfig from './FirebaseConfig/Config';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

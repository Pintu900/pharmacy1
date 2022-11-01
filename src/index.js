import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fsearch from './component/Search';
import reportWebVitals from './reportWebVitals';
import Firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
Firebase.initializeApp(firebaseConfig);
ReactDOM.render(
 <Fsearch/>,
  document.getElementById('root')
);

reportWebVitals();


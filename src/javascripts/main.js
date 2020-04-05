import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import home from './components/home/home';
import login from './components/login/login';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  login.loginButton();
  home.logoutEvent();
  home.buildHomePage();
};

init();

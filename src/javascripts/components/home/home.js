import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';

const buildHomePage = () => {
  const domString = '<h1 class="text-center mt-5 pt-5">Welcome to My Travel Diary</h1>';
  utils.printToDom('home-page', domString);
};

const logoutEvent = () => {
  const domString = '<h1>Check Out My Travel Diary</h1>';
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
  utils.printToDom('home-page', domString);
};

export default { buildHomePage, logoutEvent };

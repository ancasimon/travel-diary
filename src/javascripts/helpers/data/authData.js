import firebase from 'firebase/app';
import 'firebase/auth';

const loginDiv = $('#login-page');
const homeDiv = $('#home-page');
const homeButton = $('#navbar-home-button');
const logoutButton = $('#navbar-logout-button');
const destinationsDiv = $('#destinationsDiv');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      loginDiv.addClass('hide');
      homeDiv.removeClass('hide');
      homeButton.removeClass('hide');
      logoutButton.removeClass('hide');
      destinationsDiv.removeClass('hide');
    } else {
      // person is not logged in
      loginDiv.removeClass('hide');
      homeDiv.addClass('hide');
      homeButton.addClass('hide');
      logoutButton.addClass('hide');
      destinationsDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };

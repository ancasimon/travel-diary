import firebase from 'firebase/app';
import 'firebase/auth';

import destinationsContainer from '../../components/destinationsContainer/destinationsContainer';
import diaryContainer from '../../components/diaryContainer/diaryContainer';


const loginDiv = $('#login-page');
const homeDiv = $('#home-page');
const homeButton = $('#navbar-home-button');
const logoutButton = $('#navbar-logout-button');
const destinationsDiv = $('#destinationsDiv');
const diaryDiv = $('#diaryDiv');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      loginDiv.addClass('hide');
      homeDiv.removeClass('hide');
      homeButton.removeClass('hide');
      logoutButton.removeClass('hide');
      destinationsDiv.removeClass('hide');
      diaryDiv.removeClass('hide');
    } else {
      // person is not logged in
      loginDiv.removeClass('hide');
      homeDiv.addClass('hide');
      homeButton.addClass('hide');
      logoutButton.addClass('hide');
      destinationsDiv.addClass('hide');
      diaryDiv.addClass('hide');
    }
    destinationsContainer.buildDestinationsContainerEvents();
    destinationsContainer.buildDestinationsContainer();
    diaryContainer.buildDiaryContainer();
  });
};

export default { checkLoginStatus };

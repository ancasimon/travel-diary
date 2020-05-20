import firebase from 'firebase/app';
import 'firebase/auth';

import destinationsContainer from '../../components/destinationsContainer/destinationsContainer';
import diaryContainer from '../../components/diaryContainer/diaryContainer';
import destinationModalAdd from '../../components/destinationsContainer/destinationModalAdd';


const loginDiv = $('#login-page');
const homeDiv = $('#home-page');
const homeButton = $('#navbar-home-button');
const logoutButton = $('#navbar-logout-button');
const destinationsDiv = $('#destinationsDiv');
const diaryDiv = $('#diaryDiv');
const destinationsDivMenu = $('#navbar-destinations-button');
const diaryDivMenu = $('#navbar-diary-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      loginDiv.addClass('hide');
      homeDiv.removeClass('hide');
      homeButton.removeClass('hide');
      logoutButton.removeClass('hide');
      destinationsDivMenu.removeClass('hide');
      destinationsDiv.removeClass('hide');
      diaryDivMenu.removeClass('hide');
      diaryDiv.removeClass('hide');
    } else {
      // person is not logged in
      loginDiv.removeClass('hide');
      homeDiv.addClass('hide');
      homeButton.addClass('hide');
      logoutButton.addClass('hide');
      destinationsDivMenu.addClass('hide');
      destinationsDiv.addClass('hide');
      diaryDivMenu.addClass('hide');
      diaryDiv.addClass('hide');
    }
    destinationsContainer.buildDestinationsContainerEvents();
    destinationsContainer.buildDestinationsContainer();
    diaryContainer.buildDiaryContainerEvents();
    diaryContainer.buildDiaryContainer();
    destinationModalAdd.buildDestinationModalAddForm();
  });
};

export default { checkLoginStatus };

// THIS IS THE LOGIN PAGE WHERE THE USERT FIRST ARRIVES AND WHERE HE LOGS IN TO ACCESS THE APP; LOGIN BUTTON APPEARS HERE
import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  let domString = '<h1 class="text-center mt-5 pt-5">Check Out My Travel Diary</h1>';
  domString += '<button id="google-auth" type="button" class="btn btn-secondary btn-lg btn-block mt-5">Click here to log in with your Google email</button>';
  utils.printToDom('login-page', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };

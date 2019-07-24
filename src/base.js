import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDd8W0BlBCNMEOkaz4Lis4yG_cPmnbkcI0",
    authDomain: "todo-app-1b38c.firebaseapp.com",
    databaseURL: "https://todo-app-1b38c.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
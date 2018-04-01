import Rebase from 're-base';
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDZ6dwAJN6vzWz76e_y-POUc_fo_IzeYTs",
    authDomain: "fishshop-54c12.firebaseapp.com",
    databaseURL: "https://fishshop-54c12.firebaseio.com"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;
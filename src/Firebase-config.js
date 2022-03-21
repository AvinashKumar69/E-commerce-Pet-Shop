import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { updateLoggedInStatus } from "./redux/pets/pets.action";
import store from "./redux/store";


const firebaseConfig = {
    apiKey: "AIzaSyBZF8FtdoPh3N1dTycu7roa31gojn73yCk",
    authDomain: "ecommercepetwebsite.firebaseapp.com",
    projectId: "ecommercepetwebsite",
    storageBucket: "ecommercepetwebsite.appspot.com",
    messagingSenderId: "385513742341",
    appId: "1:385513742341:web:4efcf732f63c76aea23c6c",
    measurementId: "G-K05V4ZS4HM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((response) => {
            console.log(response);
            // store user token in session storage
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            // store user logged in status in redux
            store.dispatch(updateLoggedInStatus(true))

        })
        .catch((error) => {
            console.log(error);
        });
}
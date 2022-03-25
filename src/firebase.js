import { initializeApp } from "firebase/app";
import { browserSessionPersistence, getAuth, GoogleAuthProvider, setPersistence, signInWithPopup } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { updateLoggedInStatus } from "./redux/pets/pets.action";
import {store} from "./redux/store";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { setCuurentUser } from "./redux/user/user.action";


export const firebaseConfig = {
    apiKey: "AIzaSyBZF8FtdoPh3N1dTycu7roa31gojn73yCk",
    authDomain: "ecommercepetwebsite.firebaseapp.com",
    projectId: "ecommercepetwebsite",
    storageBucket: "ecommercepetwebsite.appspot.com",
    messagingSenderId: "385513742341",
    appId: "1:385513742341:web:4efcf732f63c76aea23c6c",
    measurementId: "G-K05V4ZS4HM"
};

const app = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
const db = app.firestore();

export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    setPersistence(auth, browserSessionPersistence)
  .then(() => {
    signInWithPopup(auth, provider)
        .then((response) => {
            console.log(response);
            store.dispatch(setCuurentUser(response.user))
            // store user token in session storage
            // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            // store user logged in status in redux
            store.dispatch(updateLoggedInStatus(true))

        })
        .catch((error) => {
            console.log(error);
        });
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    
}


export const addUserFavorite = async (userId, product) => {
    const docRef = await addDoc(collection(db, "favorites"), {
        userId,
        product
    });
    console.log("Document written with ID: ", docRef.id);
}




export const getUserFavorites =  async(userId) => {
    const result = [];
   try {
  const querySnapshot = await db.collection("favorites")
    .where("userId", "==", userId)
    .get()
    
    console.log("QuerySnapShot:-",querySnapshot);
     querySnapshot.forEach((doc) => {
        console.log("User Favorites:-",doc.data());
       if(doc.data().product) result.push(doc.data().product) 
    });
    console.log("result:-",result);
    return result
   } catch (error) {
       console.log("Error getting user favorites:-",error);
   }
}


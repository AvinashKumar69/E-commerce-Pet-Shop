import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { query, where } from "firebase/firestore";
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { updateLoggedInStatus } from "./redux/pets/pets.action";
import store from "./redux/store";
import { setCuurentUser } from "./redux/user/user.action";


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
const db = getFirestore(app);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((response) => {
            console.log(response);
            store.dispatch(setCuurentUser(response.user))
            // store user token in session storage
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            // store user logged in status in redux
            store.dispatch(updateLoggedInStatus(true))

        })
        .catch((error) => {
            console.log(error);
        });
}


export const addUserFavorite = async (userId, product) => {
    const docRef = await addDoc(collection(db, "favorites"), {
        userId,
        product
    });
    console.log("Document written with ID: ", docRef.id);
}




export const getUserFavorites = async (userId) => {
    const q = query(collection(db, "favorites"), where("userId", "==", "hNNRfmGqscZZXge4NWgRnx6AwOI2"));
   try {
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
        console.log("User Favorites:-",doc.data());
        return doc.data()
    });
   } catch (error) {
       console.log("Error getting user favorites:-",error);
   }
}


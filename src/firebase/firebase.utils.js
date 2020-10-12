import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCIk9KEN6qYh47QLO5522Z8DpsQAxa5wy8",
    authDomain: "vtyp4u.firebaseapp.com",
    databaseURL: "https://vtyp4u.firebaseio.com",
    projectId: "vtyp4u",
    storageBucket: "vtyp4u.appspot.com",
    messagingSenderId: "294394955241",
    appId: "1:294394955241:web:53dcb3b5d9daf740027778"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;
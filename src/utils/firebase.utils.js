// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkK67ercSwyJqtEuA3t1_X0EHu-fBWku4',
  authDomain: 'crwn-clothing-db-6b6ff.firebaseapp.com',
  projectId: 'crwn-clothing-db-6b6ff',
  storageBucket: 'crwn-clothing-db-6b6ff.appspot.com',
  messagingSenderId: '171007509090',
  appId: '1:171007509090:web:419814f57911b08224073b',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log('[userDocRef]',userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    if (!userSnapshot.exists()) {
        try {            
            
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });

        } catch (err) {
            console.log('error creating the user', err.message);
        }
    }

    

    return userDocRef;

}

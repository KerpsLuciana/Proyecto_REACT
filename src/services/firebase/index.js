import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuRoTHz4TA2qYk56ZuQSdeP-9AvG4hkc8",
    authDomain: "flexrappi.firebaseapp.com",
    projectId: "flexrappi",
    storageBucket: "flexrappi.appspot.com",
    messagingSenderId: "461905651456",
    appId: "1:461905651456:web:d6a9c79c3b6b484654b5e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)

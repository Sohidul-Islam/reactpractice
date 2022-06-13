// Import the functions from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.config';

// Initialize Firebase: method 1
// const app = initializeApp(firebaseConfig);

// Initialize Firebase: method 2
const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication;
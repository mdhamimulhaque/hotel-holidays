// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfW1YhH96h5he5Wo3XPXvNp42JUfT9z6E",
    authDomain: "hotel-holidays.firebaseapp.com",
    projectId: "hotel-holidays",
    storageBucket: "hotel-holidays.appspot.com",
    messagingSenderId: "687964677925",
    appId: "1:687964677925:web:6635439fe000b22341dccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
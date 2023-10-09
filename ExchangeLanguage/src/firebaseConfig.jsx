// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA30Lnz2kbwvnw5hKPxGWgGRaRZn7iSpRQ",
  authDomain: "exchange-language-online.firebaseapp.com",
  projectId: "exchange-language-online",
  storageBucket: "exchange-language-online.appspot.com",
  messagingSenderId: "907579628898",
  appId: "1:907579628898:web:a39b858dddd8ffe07b603b",
  measurementId: "G-TQ21QK283C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD12z4XHqBQzutGy6pA1w8FmnWLBzIR2eU",
  authDomain: "authentication-a321b.firebaseapp.com",
  projectId: "authentication-a321b",
  storageBucket: "authentication-a321b.appspot.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

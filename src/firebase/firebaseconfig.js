
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCAd5xXfFDu_JMeL9IXWNu8jiZLNLKy-A",
  authDomain: "the-db-event.firebaseapp.com",
  projectId: "the-db-event",
  storageBucket: "the-db-event.appspot.com",
  messagingSenderId: "862666022494",
  appId: "1:862666022494:web:3e889cd9f5f384e2541ecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
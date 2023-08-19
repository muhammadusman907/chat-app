import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc , getDocs  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQ2x1t0ksjgP4GvM5RWAizGIc_LMUtsSI",
  authDomain: "email-d0869.firebaseapp.com",
  projectId: "email-d0869",
  storageBucket: "email-d0869.appspot.com",
  messagingSenderId: "1029053985047",
  appId: "1:1029053985047:web:a7087eb660a934d7270752",
  measurementId: "G-8M4DTX2M9E"
};

export { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut,
    getFirestore, collection, addDoc , getDocs 
}

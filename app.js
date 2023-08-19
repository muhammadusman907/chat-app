import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCQ2x1t0ksjgP4GvM5RWAizGIc_LMUtsSI",
  authDomain: "email-d0869.firebaseapp.com",
  projectId: "email-d0869",
  storageBucket: "email-d0869.appspot.com",
  messagingSenderId: "1029053985047",
  appId: "1:1029053985047:web:a7087eb660a934d7270752",
  measurementId: "G-8M4DTX2M9E"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

let loginBtn = document.getElementById("login-btn");
let loginEmail = document.getElementById("login-email");
let loginPassword = document.getElementById("login-password");
let userName = document.getElementById("username");

console.log(location.pathname)
// login user
if (location.pathname == "/index.html") {

  let loginUser = () => {

    let userDataLogin = {
      login_email: loginEmail.value,
      login_password: loginPassword.value
    }

    signInWithEmailAndPassword(auth, userDataLogin.login_email, userDataLogin.login_password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        console.log(user.uid)
        let idString = JSON.stringify(user.uid);
        localStorage.setItem("userId", idString)
        window.location.href = "./profile.html";
        // console.log(userId)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode)
      });

  }
  window.loginUser = loginUser;
}

  onAuthStateChanged(auth, (user) => {

    let userDataBaseId = localStorage.getItem("userDataBase");
    console.log(userDataBaseId)

    if (user.uid) { 
       if (location.pathname !== "/profile.html" && location.pathname !== "/signup.html") {
        location.href = "./profile.html"
      }
      // const uid = user.email;
      // const uidtrue = user.emailVerified;
    //   if (location.pathname === "/profile.html"){
    //     // let userList = document.getElementById("user-list")
    //   // userList.innerHTML += `<li>${uid}</li>`
    //   // userList.innerHTML += `<li>${uidtrue}</li>`
    // }
      console.log(user)
     
   
      // if (user ) {
      //   location.href = "./profile.html"
  
      // }
  
      // console.log(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }

  });
// current user compelete

// GET All USER START
// let getAllUser = async() => {

//   const querySnapshot = await getDocs(collection(db, "student"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} =>`, doc.data());
//   });
// }
// getAllUser()
// // GET All USER COMPELETE

// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

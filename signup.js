
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);

// const app = initializeApp();
// const auth = getAuth(app);

let signUpEmail = document.getElementById("signup-email");
let signUpPassword = document.getElementById("signup-password");
let signUpBtn = document.getElementById("signup-btn");
let userName = document.getElementById("username");
if (location.pathname == "/signup.html") {
 
    let signupUser = () => {
      let userData = {
        signUpemail: signUpEmail.value,
        signUppassword: signUpPassword.value,
        username : userName.value
      }
      createUserWithEmailAndPassword(auth, userData.signUpemail, userData.signUppassword,userData.username)
      .then(async(userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Add a new document with a generated id.
          
          try {
              const docRef = await addDoc(collection(db, "users"), {
               ...user
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
}
    console.error("Error adding document: ", e);
    
  })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          console.log(errorCode)
          // ..
      });
    }
    //  window.signupUser = signupUser;
    signUpBtn.addEventListener("click",signupUser)
  }
  
// onAuthStateChanged(auth, (user) => {
//    let dataBase =  localStorage.getItem("userDataBase")
//   if (user  ) {
//     const uid = user.uid;
//     localStorage.setItem("userDataBase" , user.uid)
//     if(user.uid ){
//           location.href = "./profile.html"
//     }
    // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
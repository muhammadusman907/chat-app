import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getFirestore ,collection, addDoc} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

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
const db = getFirestore(app);


let dashboardinput = document.getElementById("blog-tittle");
let blogbtn = document.getElementById("blog-btn");
let blog = document.getElementById("blog");
console.log(dashboardinput)
let blogfun = async()=>{
    try {
        const docRef = await addDoc(collection(db, "student"), {
          blodValue:" hell",
          blog:"helo"
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    console.log(dashboardinput.value)
    console.log(blog.value)
}
blogbtn.addEventListener("click",blogfun)
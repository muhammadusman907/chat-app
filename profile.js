import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
import { getFirestore,collection, addDoc,doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

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
const storage = getStorage();
const db = getFirestore(app);
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
// import{getStorage, ref, uploadBytesResumable, getDownloadURL} from "./firebase.js"

let profileFileImage = document.getElementById("profile-image-file");
let profileBtnImage = document.getElementById("profile-image-btn");

let profileUpdateImage = ()=>{ 
    console.log("hee")
    console.log(profileFileImage.files[0].name)
    updateProfile(profileFileImage.files[0])
    .then(async(res)=>{console.log(res)

    let profileImage = document.getElementById("profile-image");
    // console.log(typeof(res))
    profileImage.src = res;

    const washingtonRef = doc(db, "student", localStorage.getItem("userid"));
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      capital: true
    });
    }
    )
    .catch(rep=>console.log(rep))
    // console.log()
        // console.log(profileBtnImage)
    }



let updateProfile = (file) =>{
    return new Promise ((resolve,reject)=>{
      
        
        // const storageRef = ref(storage, `images/${profileFileImage.files[0].name}`);
    
        // uploadBytes(storageRef,profileFileImage.files[0].name ).then((snapshot) => {
        //     console.log('Uploaded a blob or file!');
        //   });
    
    
    // const storage = getStorage(); 
    console.log(file.name)
    const storageRef = ref(storage, `images${file}`);
    
    const uploadTask = uploadBytesResumable(storageRef,file);
    
    uploadTask.on('state_changed', 
      (snapshot) => {
        
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        reject(error)
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          resolve(downloadURL)
        });
      }
    );
        
    })
  
} 

profileBtnImage.addEventListener("click" ,profileUpdateImage);

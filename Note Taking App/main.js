import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyCrQkGYKumEgQtckzdYTWGOX6PSF6d7h3k",
    authDomain: "demo2-8da41.firebaseapp.com",
    projectId: "demo2-8da41",
    storageBucket: "demo2-8da41.appspot.com",
    messagingSenderId: "410972079970",
    appId: "1:410972079970:web:bfefe2eb0036340dbbce3b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languaugeCode = 'en';

const provider = new GoogleAuthProvider()

const googlelogin = document.getElementById("google-login-btn");


googlelogin.addEventListener("click",function(){

    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    window.location.href="logged.html"
    
    }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    });
})




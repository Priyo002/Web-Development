
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,GoogleAuthProvider, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"

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

const user = auth.currentuser;

function updateUserProfile(user){
    const username = user.displayName;
    const userEmail = user.email;
    
}

onAuthStateChanged(auth,(user)=>{
    if(user){
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    }
    else{
        alert("Bug from Google Log in");
    }
})

const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const body = document.querySelector('body');
    const title = String(document.querySelector('#title').value);
    const content = String(document.querySelector('#content').value);

    const div = document.createElement('div');
    const one = document.createElement('h1');
    one.textContent = title;
    const two = document.createElement('h2');
    two.textContent = content;
    
    div.appendChild(one);
    div.appendChild(two);

    body.appendChild(div);
});


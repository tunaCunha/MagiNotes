import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js';
//import { GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

// MajiNotes Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIMRnIVoLWP2-aqP8mYOLwNFPxjdYp77M",
    authDomain: "majinote-27813.firebaseapp.com",
    projectId: "majinote-27813",
    storageBucket: "majinote-27813.appspot.com",
    messagingSenderId: "473460624557",
    appId: "1:473460624557:web:0073213ce0ad98de8aca24",
    measurementId: "G-S8H83VV32D"
};
// Initializing Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//To help test if these buttons are actually working
document.getElementById('login').addEventListener("click", googleLogin);
document.getElementById('logout').addEventListener("click", logoutUser);

const provider = new firebase.auth.GoogleAuthProvider()

//To make the buttons work
function googleLogin(){
    console.log('Login Button Call');
    firebase.auth().signInWithPopup(provider).then(res=>{
        console.log(res)
    }).catch(e=>{
        console.log(e)
    })
}

function logoutUser() {
    console.log('Logout Button Call');
}
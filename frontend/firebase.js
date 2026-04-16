import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHIC69mts3EsSqxdMEauvTI0C-a09GV6I",
    authDomain: "lumoraai-chatbot-4a7e8.firebaseapp.com",
    projectId: "lumoraai-chatbot-4a7e8",
    storageBucket: "lumoraai-chatbot-4a7e8.firebasestorage.app",
    messagingSenderId: "391999938536",
    appId: "1:391999938536:web:fe1c764cccefeb1709ce5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("Logged in:", result.user.displayName);
        window.location.href = "index.html";
    } catch (error) {
        console.error("Google Login Error:", error);
        document.getElementById("loginError").innerText =
            "Google sign-in failed. Please try again.";
    }
}

// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB0TlA91VUeKwbXdS35WuDrlb9LNfNomBI",
  authDomain: "glog-a88ce.firebaseapp.com",
  projectId: "glog-a88ce",
  storageBucket: "glog-a88ce.firebasestorage.app",
  messagingSenderId: "484716923884",
  appId: "1:484716923884:web:fddbcc882b5983753d4ec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Handle Google Login
const loginBtn = document.getElementById("google-login");

loginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`✅ Welcome ${user.displayName}`);
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("❌ Google Sign-In Failed: " + error.message);
    });
});

// Optional: Auth state listener
onAuthStateChanged(auth, (user) => {
  console.log(user ? "🟢 Logged in as " + user.email : "🔴 Not logged in");
});

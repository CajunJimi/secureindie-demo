// INTENTIONALLY VULNERABLE demo (SecureIndie sample report). The config below
// is public by design in every Firebase app; the mistake is the rules behind it.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCC4OwTn1S7crZR67aGC2t0jl9_63lO6w",
  authDomain: "secureindie-fb-demo.firebaseapp.com",
  projectId: "secureindie-fb-demo",
  storageBucket: "secureindie-fb-demo.firebasestorage.app",
  messagingSenderId: "163877155454",
  appId: "1:163877155454:web:0d3595800104b95c471e2f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function loadBoard() {
  return (await getDocs(collection(db, "posts"))).docs.map(d => d.data());
}
export async function myProfile() {
  return (await getDocs(collection(db, "users"))).docs.map(d => d.data());
}
export async function checkout(total) {
  return addDoc(collection(db, "orders"), { total, status: "pending" });
}
document.getElementById("start").onclick = () => alert("Sign-up is closed in this demo.");

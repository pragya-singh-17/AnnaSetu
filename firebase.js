
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Replaced
const firebaseConfig = {
    apiKey: "AIzaSyAsf0Nyl5GFxfp9rmEtbm57YxGLp0Hm5tE",
    authDomain: "annasetu-4d91e.firebaseapp.com",
    projectId: "annasetu-4d91e",
    storageBucket: "annasetu-4d91e.firebasestorage.app",
    messagingSenderId: "897036862185",
    appId: "1:897036862185:web:e33817f28bf3bdbabc6678"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

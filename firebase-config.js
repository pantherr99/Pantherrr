import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    set, 
    get, 
    child, 
    remove, 
    onValue,
    update, // <--- Eksik olan buydu, eklendi
    onDisconnect 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjMAo3sazNWx5aNFS9RnOahAqNOxyMmjA",
    authDomain: "panter-f9c0e.firebaseapp.com",
    databaseURL: "https://panter-f9c0e-default-rtdb.europe-west1.firebasedatabase.app", 
    projectId: "panter-f9c0e",
    storageBucket: "panter-f9c0e.firebasestorage.app",
    messagingSenderId: "123104603113",
    appId: "1:123104603113:web:88d6eb21f9f27295e1f978",
    measurementId: "G-8L47TQSC4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Proje genelinde kullanılacak tüm modülleri dışa aktarıyoruz
export { 
    db, 
    ref, 
    set, 
    get, 
    child, 
    remove, 
    onValue, 
    update, // <--- Buraya da ekledik ki admin.html çekebilsin
    onDisconnect 
};
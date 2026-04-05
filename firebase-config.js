import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    set, 
    get, 
    child, 
    remove, 
    onValue  // <--- BURAYA EKLE
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    // Senin kendi config bilgilerin burada kalsın
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Hepsini export ettiğinden emin ol
export { db, ref, set, get, child, remove, onValue };
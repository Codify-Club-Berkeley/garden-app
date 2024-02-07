import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyC7F1kyOwJPwsF-lw_MWDbLdB6T2Rx6iO0",
    authDomain: "plant-data-a03d2.firebaseapp.com",
    databaseURL: "https://plant-data-a03d2-default-rtdb.firebaseio.com",
    projectId: "plant-data-a03d2",
    storageBucket: "plant-data-a03d2.appspot.com",
    messagingSenderId: "995516801184",
    appId: "1:995516801184:web:ba2a08d14839b8162769c5",
    measurementId: "G-LFKMYPLSR0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdQBbnhFX8ODGtn7wKlD8Ch1t3TKCO8b8",
    authDomain: "todolist-e1bb1.firebaseapp.com",
    projectId: "todolist-e1bb1",
    storageBucket: "todolist-e1bb1.appspot.com",
    messagingSenderId: "257844324978",
    appId: "1:257844324978:web:bb78b59a203b40ed3830eb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default db
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB05rF3MNZibNrFfhPw5dAM5DzHAmu0wc8",
  authDomain: "library-994bb.firebaseapp.com",
  projectId: "library-994bb",
  storageBucket: "library-994bb.firebasestorage.app",
  messagingSenderId: "679624100928",
  appId: "1:679624100928:web:194b50602e35c745b6a3a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getBooks = async () => {
const books = await getDocs(collection(db, "books"));
return books.docs.map((doc) =>{
    return { ...doc.data(), id: doc.id };
  });
}


export const addBook = async (book) => {
    try {
    const docRef = await addDoc(collection(db, "books"), book);
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}


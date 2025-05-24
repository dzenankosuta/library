// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
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

export const editBook = async (bookId, updatedBook) => {
  try {
    const bookRef = doc(db, "books", bookId);
    await updateDoc(bookRef, updatedBook);
    console.log("Document updated with ID: ", bookId);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const deleteBook = async (bookId, deletedBook) => {
  try {
    const bookRef = doc(db, "books", bookId);
    await deleteDoc(bookRef, deletedBook);
    console.log("Document deleted with ID: ", bookId);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

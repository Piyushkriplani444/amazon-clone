import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFiz36k9V76tKb8sKQKQpxu8IDjHHInmI",
    authDomain: "clone-2b5d3.firebaseapp.com",
    projectId: "clone-2b5d3",
    storageBucket: "clone-2b5d3.appspot.com",
    messagingSenderId: "39041870725",
    appId: "1:39041870725:web:71abea08ce7172ee6632ec",
    measurementId: "G-3YB9DVY806"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};
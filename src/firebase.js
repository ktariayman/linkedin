import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD0LOgKGzij47mHFXWGpw85kVNQENHmdvA",
  authDomain: "linkedinclone-1ee88.firebaseapp.com",
  databaseURL: "https://linkedinclone-1ee88-default-rtdb.firebaseio.com",
  projectId: "linkedinclone-1ee88",
  storageBucket: "linkedinclone-1ee88.appspot.com",
  messagingSenderId: "22356696349",
  appId: "1:22356696349:web:6dfeb5de01bacdb6c055f4",
  measurementId: "G-CJERVRFQW3"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth , provider , storage};
  export default db;
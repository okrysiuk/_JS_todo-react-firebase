import firebase from "firebase";

/*const firebaseConfig = {
  apiKey: 'AIzaSyD913zoD5TQwGsd1kHWPdvzo6-7DMFBj8U',
  authDomain: 'tododaily-5dc59.firebaseapp.com',
  databaseURL: 'https://tododaily-5dc59.firebaseio.com',
  projectId: 'tododaily-5dc59',
  storageBucket: 'tododaily-5dc59.appspot.com',
  messagingSenderId: '272694852596',
  appId: '1:272694852596:web:5ddb762dd9e30e4cb0d7a1',
  measurementId: 'G-BSXVN1XVL7',
};*/
const firebaseConfig = {
  apiKey: "AIzaSyDFqT7mr4rOFT9jzUcl5dL_BfSePDMWiGU",
  authDomain: "time-tracker-ce6df.firebaseapp.com",
  databaseURL: 'https://time-tracker-ce6df-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: "time-tracker-ce6df",
  storageBucket: "time-tracker-ce6df.appspot.com",
  messagingSenderId: "38080867191",
  appId: "1:38080867191:web:6bf522edc47cdd1403cf72"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

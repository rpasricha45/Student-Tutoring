import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyBdITG1RRMxv8we8YpovRU2dzaFdxo_FtM",
    authDomain: "tutoring-2ee5b.firebaseapp.com",
    databaseURL: "https://tutoring-2ee5b.firebaseio.com",
    projectId: "tutoring-2ee5b",
    storageBucket: "tutoring-2ee5b.appspot.com",
    messagingSenderId: "799976822639",
    appId: "1:799976822639:web:9b391d3ad3365c2957ba9a",
    measurementId: "G-LD3KDZB1YR"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire;

  

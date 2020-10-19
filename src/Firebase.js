import firebase from 'firebase'

  const firebaseApp=firebase.initializeApp(
    {
      apiKey: "AIzaSyAR5i3N6Sr6Qs0lCo2iKBiGYFYbWKtOWFU",
      authDomain: "todo-app-6278f.firebaseapp.com",
      databaseURL: "https://todo-app-6278f.firebaseio.com",
      projectId: "todo-app-6278f",
      storageBucket: "todo-app-6278f.appspot.com",
      messagingSenderId: "758674018920",
      appId: "1:758674018920:web:32c84bcbff21b401a561dd",
      measurementId: "G-EP6QBYDH36"
    }
  );

  const db=firebaseApp.firestore();

  export default db
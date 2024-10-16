const express = require('express');
const app = express();
const firebase = require('firebase');
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
});

firebase.initializeApp({
  // Your Firebase web app configuration
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Routes and logic for guest posting, Google sign-in, replies, voting, and sharing

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

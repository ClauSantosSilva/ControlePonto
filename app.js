console.log("Carregando configuração do Firebase...");

//Configurar firabase

const firebaseConfig = {
    apiKey: "AIzaSyBcD86kd3ZOG3T4X7beg0DJc8z_1BrponQ",
    authDomain: "controledeponto-6ecd0.firebaseapp.com",
    databaseURL: "https://controledeponto-6ecd0-default-rtdb.firebaseio.com",
    projectId: "controledeponto-6ecd0",
    storageBucket: "controledeponto-6ecd0.appspot.com",
    messagingSenderId: "45653500064",
    appId: "1:45653500064:web:98e23e370f031179c229c5",
    measurementId: "G-FLVVK4NY9J"
  };

 
 
 
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase inicializado"); // Debug após a inicialização
  } else {
    firebase.app(); // if already initialized, use that one
  }
  
  console.log("Firebase carregado");
  
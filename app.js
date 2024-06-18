console.log("Carregando configuração do Firebase...");

//Configurar firabase

const firebaseConfig = {
   
  };

 
 
 
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase inicializado"); // Debug após a inicialização
  } else {
    firebase.app(); // if already initialized, use that one
  }
  
  console.log("Firebase carregado");
  

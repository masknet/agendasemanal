    var firebaseConfig = {
		  apiKey: "AIzaSyBkrBLKuklZgPm1nz2G997ULiYycZMb9F8",
      authDomain: "avisoseeventos.firebaseapp.com",
      databaseURL: "https://avisoseeventos-default-rtdb.firebaseio.com",
      projectId: "avisoseeventos",
      storageBucket: "avisoseeventos.appspot.com",
      messagingSenderId: "247706769451",
      appId: "1:247706769451:web:ce31cd9d0ca22cd267b26e",
      measurementId: "G-QE1Z4RQ60T"
	};
	// Inicialização do Firebase
	firebase.initializeApp(firebaseConfig);
	var database = firebase.database();


  firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.replace("login.html");
  }
});

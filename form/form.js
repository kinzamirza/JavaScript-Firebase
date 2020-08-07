
  var firebaseConfig = {
    apiKey: "AIzaSyA6JhYcVVqzCK6Fw_NxhZf41k50KXu_eIE",
    authDomain: "form-a77a4.firebaseapp.com",
    databaseURL: "https://form-a77a4.firebaseio.com",
    projectId: "form-a77a4",
    storageBucket: "form-a77a4.appspot.com",
    messagingSenderId: "702566215237",
    appId: "1:702566215237:web:be3755a61ef1549cc7bd2c"
  	};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

function signUp(){

  	var username = document.getElementById("username");
  	var email = document.getElementById("email");
  	var password = document.getElementById("password");
  	//usdr create karahain hai auth app main user with email and password
  	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
   	//alert message for invalid no or if password is less alert 
  	promise.catch(e => alert(e.message));
  	alert(" You have Signed Up");
  	// body...
	}

function signIn(){
  	var email = document.getElementById("email");
  	var password = document.getElementById("password");
  	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  	 promise.catch(e => alert(e.message));
  	 alert("SignedIn" + email.value);
   	}

function signOut(){
   	auth.signOut();
   	alert("Signed Out");
  	 }

   auth.onAuthStateChanged(function(user){
   	if(user){
   		var email = user.email;
   		alert("Active User"+ email);

   	}

   	else{
   		alert("No Active User");
   	}
   	});
   
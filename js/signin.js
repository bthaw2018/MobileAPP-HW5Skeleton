function dosignin() {
  clean_buttons();
  document.getElementById("signin").classList.add("selected");

  //Clear Content
  document.getElementById("content").innerHTML = "";

  var btn = document.createElement("button");
  btn.innerHTML = "Sign-In with Google"
  btn.onclick = toggleSignIn;

  document.getElementById("content").appendChild(btn);

}


function toggleSignIn() {
  //If the current user object does not exist
  if (!firebase.auth().currentUser) {
    //Set the auth provider to Google
    var provider = new firebase.auth.GoogleAuthProvider();
    //And sign in with a popup
    firebase.auth().signInWithPopup(provider)
      .then(function (result) { //On Success save the token to session storage and output it to console
        var token = result.credential.accessToken;
        window.sessionStorage.setItem("token",token);
        console.log(token)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }
        alert('Make sure you have updated your Firebase Config in firebase_creds.js! Check console.log for more details.');
      });
  } else {
    firebase.auth().signOut();
  }
}


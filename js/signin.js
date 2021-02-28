function dosignin() {
    clean_buttons();
    document.getElementById("signin").classList.add("selected");

    //Clear Content
    document.getElementById("content").innerHTML = "";

    var btn = document.createElement("button");
    btn.innerHTML = "Sign-In with Yahoo!"
    btn.onclick = toggleSignIn;

    document.getElementById("content").appendChild(btn);



}


function toggleSignIn() {
    //If the current user object does not exist
    if (!firebase.auth().currentUser) {
      //Set the auth provider to yahoo
      var provider = new firebase.auth.OAuthProvider('yahoo.com');
      //And sign in with a popup
      firebase.auth().signInWithPopup(provider)
        .then(function (result) { //On Success save the token to session storage and output it to console
          var token = result.credential.accessToken;
          window.sessionStorage.setItem("token",token);
          console.log(token)
        })
        .catch(function (error) { //On failure alert user or report error to console
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          } else {
            console.error(error);
          }
        });
    } else {
      firebase.auth().signOut();
    }
  
  }


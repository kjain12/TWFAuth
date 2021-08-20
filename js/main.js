document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

document.getElementById("signupForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

const login = document.getElementsByClassName('login-container');
const signup = document.getElementsByClassName('signup-container');

const logswitch = document.getElementsByClassName('login-switch');
const signswitch = document.getElementsByClassName('signup-switch');

/* console.log(signswitch[0]); */

function signUPswitch(){
    signup[0].style.display="block";
    login[0].style.display="none";
}

function Loginswitch(){
    signup[0].style.display="none";
    login[0].style.display="block";
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        /* console.log(user); */
        /* location.replace("home.html") */
    }
})

const user = firebase.auth().currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  console.log(displayName);

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}


function Login(){
    const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function Signup(){
    const email = document.getElementById("sign-email").value;
    const password = document.getElementById("sign-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}


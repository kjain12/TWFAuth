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
        location.replace("home.html");
    }
})


function Login(){
    const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userinfo) => {
    alert("Sign in successfully");
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function Signup(){
    const email = document.getElementById("sign-email").value;
    const password = document.getElementById("sign-password").value;
    /* const username = document.getElementById("sign-name").value; */
    console.log(username);
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userinfo) => {
    alert("Sign up successfully");
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}


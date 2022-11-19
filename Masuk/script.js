const firebaseConfig = {
    apiKey: "AIzaSyBbMMUSaMnIf2SM2w9LGQ8QWK6pUjppDxw",
    authDomain: "livetrackingclassroom.firebaseapp.com",
    databaseURL: "https://livetrackingclassroom-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "livetrackingclassroom",
    storageBucket: "livetrackingclassroom.appspot.com",
    messagingSenderId: "643853387796",
    appId: "1:643853387796:web:008ae5a8e0da0e68363f01",
    measurementId: "G-W3G7G5LDRS"
  };


const app = firebase.initializeApp(firebaseConfig);

const container = document.querySelector(".container");

const submitButton = document.getElementById("Button_Login");
const emailInput = document.getElementById("floatingInput");
const passwordInput = document.getElementById("floatingPassword");



var email, password;


submitButton.addEventListener("click", function() {
  email = emailInput.value;
  password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert(`Selamat Datang Akun: ${cred.user.uid}`);
      location.href = "http://127.0.0.1:5500/Beranda/index.html";
      // ...
    })
    .catch((error) => {
        alert(error);
        var errorCode = error.code;
        var errorMessage = error.message;
    });
});
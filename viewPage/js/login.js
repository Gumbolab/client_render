import * as controller from './action/controller.js';

var login = window.document.getElementById('submit');
var signup = document.getElementById('Sign-up');

// try to get data from local staorage 
var user = JSON.parse(window.localStorage.getItem('user'));
// 
if (user != null) {
        document.getElementsByClassName("typing-user")[0].value = user.mail;
        document.getElementsByClassName("typing-pw")[0].value = user.pw;

}


signup.onclick = () => {
        // window.location.href = '/html/signup.html';
        // alert("here");
        // console.log("here ")
        location.replace("/html/signup.html");
        // alert("navigate to signup page");
}




login.addEventListener('click', controller.PostUserLoginData);


/*
to access cross origin error :
        1. send request with header allow origin
        2. wait to response
        3. when be allow--> open the gate



 */
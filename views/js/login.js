var login = window.document.getElementById('submit');
var error_user_name = document.getElementById('error');
var signup = document.getElementById('Sign-up');
var checkbox = document.getElementById('remeber_pw');
// try to get data from local staorage 
var user = JSON.parse(window.localStorage.getItem('user'));
// 
console.log(user);
console.log(document.getElementsByClassName("typing-user")[0]);
document.getElementsByClassName("typing-user")[0].value = user.mail;
document.getElementsByClassName("typing-pw")[0].value = user.pw;

signup.onclick = () => {
        // window.location.href = '/html/signup.html';
        // alert("here");
        console.log("here ")
        // location.replace("/html/signup.html");
        alert("navigate to signup page");
}
function validateInput(userName) {
        if (userName === '') {
                error_user_name.innerHTML = 'please typing your user name or your mail';
                return Promise.resolve(true);// true if have error
        }
        error_user_name.innerHTML = '';
        return Promise.resolve(false);

}


function PostUserLoginData() {
        var theUrl = 'http://0.0.0.0:5000/users';
        var userName = document.getElementsByClassName("typing-user")[0].value ;
        
        var pw = document.getElementsByClassName("typing-pw")[0].value ;

        function callback(res) {
                console.log('hello');
                console.log(res);
                if (res == 'EXISTED') {
                        // alert(" succes login");
                        if (checkbox.checked) {
                                //local storage
                                localStorage.setItem('user', JSON.stringify({
                                        mail: userName,
                                        pw: pw
                                }));

                        }

                        console.log("well done");
                        // location.replace("./html/success.html");//
                        alert('successed');
                } else if (res == 'NOT FOUND') {
                        error_user_name.innerHTML = 'account not existed';
                }
        } 



        validateInput(userName).then((ans) => {
                if (!ans) {
                        postHTTP(theUrl, callback);
                }
        })


        function postHTTP(theurl, callback) {
                var http = new XMLHttpRequest();// make new request
                http.onreadystatechange = function () {
                        if (http.readyState == 4 && http.status == 200) {
                                callback(http.response);
                        }
                }

                http.open('POST', theurl, true);// open channel for http transfer
                http.setRequestHeader('Content-Type', 'application/json');
                http.send(JSON.stringify({ mail: userName, pw: pw }));
                // console.log('warting for check mail is existed or not');
        }



}

login.addEventListener('click', PostUserLoginData);


/*
to access cross origin error :
        1. send request with header allow origin 
        2. wait to response
        3. when be allow--> open the gate



 */
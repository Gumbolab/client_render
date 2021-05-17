function PostHttp(theurl, callback) {
      var http = new XMLHttpRequest();// make new request
      http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                  callback(http.response);
            }
      }
      var name = document.getElementById("typing-name").value;
      var pw = document.getElementById("typing-pw").value;
      var mail = document.getElementById('typing-mail').value;


      http.open('POST', theurl, true);// open channel for http transfer
      http.setRequestHeader('Content-Type', 'application/json');
      http.send(JSON.stringify({ name: name, mail: mail, pw: pw }));
      // console.log('warting for check mail is existed or not');

}

//signup
function callback_signup(res) {
      console.log(res);
      if (res == 'DONE') {

            location.replace("./success.html");
      } else if (res == 'EXISTED') {
            var error_wn_name = document.getElementsByClassName('name')[0];
            error_wn_name.style.borderBottom ="3px solid red";

      }
}//ending callback function
//login


function callback_login(res) {
      console.log('hello');
      console.log(res);
      var checkbox = document.getElementById('remeber_pw');
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
            var error_wn_name = document.getElementsByClassName('name')[0];
            error_wn_name.style.borderBottom = "3px solid red";
      }
}
function postHTTP_login(theurl, callback) {
      var http = new XMLHttpRequest();// make new request
      http.onreadystatechange = function () {
              if (http.readyState == 4 && http.status == 200) {
                      callback(http.response);
              }
      }
      var userName = document.getElementsByClassName("typing-user")[0].value;
      var pw = document.getElementsByClassName("typing-pw")[0].value;

      http.open('POST', theurl, true);// open channel for http transfer
      http.setRequestHeader('Content-Type', 'application/json');
      http.send(JSON.stringify({ mail: userName, pw: pw }));
      // console.log('warting for check mail is existed or not');
}


// function PostUserLoginData() {


//       console.log("well done");
//       // location.replace("./html/success.html");//
//       alert('successed');
// } else if (res == 'NOT FOUND') {
//       error_wn_name.style.borderBottom ="3px solid red";
// }




// validateInput(userName).then((ans) => {
// if (!ans) {
//       postHTTP(theUrl, callback);
// }
// })









export {
      PostHttp,
      postHTTP_login,
      callback_login,
      callback_signup
}
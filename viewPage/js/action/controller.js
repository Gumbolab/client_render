
import * as req from './HttpReq.js';
import * as auth from './validate.js';
import * as theUrl from './navigate.js';


function CREATENEWACCOUNT() {
      //muon create acc:
      /*
              1. checking syntax field 
              2.post to server
                  1. existed mail
                  2. no existed 
              when res success--> hashing pw and send it to server
                      risk of that
                      1. if somebody want to know you pw--> manipulatiing your browser
                      2. 
                  */  
      var name = document.getElementById("typing-name").value;
      var pw = document.getElementById("typing-pw").value;
      var mail = document.getElementById('typing-mail').value;

      auth.validateSyntax(name, mail, pw).then((ans) => {
              console.log(ans);
              // true have error
              if (!ans) {
                      req.PostHttp(theUrl.theUrl_signup,req.callback_signup);
              } else {
                      console.log(" love the server still waiting");
              }

      }); // ending validate



    
}///ending createacc function


function PostUserLoginData() {
      
      var userName = document.getElementsByClassName("typing-user")[0].value;

      var pw = document.getElementsByClassName("typing-pw")[0].value;

     

      auth.validateInput(userName).then((ans) => {
              if (!ans) {
                  req.postHTTP_login(theUrl.theUrl_login,req.callback_login);
              } else {
                  console.log("server still waiting");
          }
      });


     



}




export  {
      CREATENEWACCOUNT,
      PostUserLoginData
}


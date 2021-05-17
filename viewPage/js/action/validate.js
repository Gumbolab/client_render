var error_wn_name = document.getElementsByClassName('name')[0];
var error_wn_mail = document.getElementsByClassName('mail')[0];
var error_wn_pw = document.getElementsByClassName('pw')[0];

var validateSyntax =function (name, mail, pw) {
      return new Promise(
            function(resolve,reject){


                  var error_name;
                  var error_mail;
                  var error_pw;
                  
                  // var error_pw = false;
                  if (name == '' || name.length > 15) {
                          error_wn_name.style.borderBottom ="3px solid red";// if have error at name tag 
                          error_name = true;
            
                  } else {
                          error_wn_name.style.borderBottom ="none";
                          if (function () {
                                  const limit_char = '!@#$%^&*()- +';
                                  for (var i = 0; i < limit_char.length; i++) {
                                          if (name.includes(limit_char[i])) {
            
            
                                                  error_wn_name.style.borderBottom ="3px solid red";// if have error at name tag
            
            
                                                  return true;
                                          }
                                  } return false;
            
                          }()) {
                                  // document.getElementById('error-name').innerHTML='please choose another name';
                                  // console.log("when name is wrong ");
                                  error_name = true;
            
                          } else {
            
                                  error_wn_name.style.borderBottom ="none";// if have nothing error syntax in tag name
                                  error_name = false;
                          }
            
                  }
                  // END NAME
            
                  if (mail == '') {
                          error_mail = true;// have error
                          error_wn_mail.style.borderBottom ="3px solid red";// ifif have error in mail 
                  } else {
                          if (mail.includes('@')) {
                                  var index_first_acong = mail.indexOf('@');
                                  error_wn_mail.style.borderBottom ="none";// if have @ in mail tag
                                  for (var i = index_first_acong + 1; i < mail.length; i++) {
                                          
                                          switch (true) {
                                                  case i == index_first_acong + 1 && mail[i - 2] == '.':
                                                          error_wn_mail.style.borderBottom ="3px solid red";
                                                          error_mail = true;
                                                          break;
                                                  case mail[mail.length - 1] == '.':
                                                          error_wn_mail.style.borderBottom ="3px solid red";
                                                          error_mail = true;
                                                          break;
                                                  case '!@#$%%&*()_-+=,":;~`/<>'.includes(mail[i]):
                                                          error_wn_mail.style.borderBottom ="3px solid red";
                                                          error_mail = true;
                                                          break;
                                                  case mail[i] == '.' && mail[i - 1] == '.':
                                                          error_wn_mail.style.borderBottom ="3px solid red";
                                                          error_mail = true;
                                                          break;
                                                  default:
                                                          error_mail = false;
                                                          error_wn_mail.style.borderBottom ="none";
                                                          break;
            
            
                                          }
                                          if (error_mail) {
                                                  break;
                                          }
            
                                  }//ending for   
            
                          } else {
                                  //if have no @ character
                                  error_wn_mail.style.borderBottom ="3px solid red";
                                  error_mail = true;
                                  // console.log("have error mail");
                          }
                  }
            
                  if (pw == '') {
            
                          error_wn_pw.style.borderBottom ="3px solid red";
                          // return false;
                          error_pw = true;;
                  } else {
                          error_wn_pw.style.borderBottom ="none";
                          error_pw = false;
                  }
            
                  // return error_name || error_pw || error_mail;
                  if (error_name || error_pw || error_mail) {
                          resolve(true);////true have error
                  } else {
                          resolve(false);///have no error
                  }
            
            }



            
      )//end promise 
      }


function validateInput(userName) {
      console.log(" validate input");
      if (userName === '') {
             
              error_wn_name.style.borderBottom ="3px solid red";
              return Promise.resolve(true);// true if have error
      }
      error_wn_name.style.borderBottom ="none";
      return Promise.resolve(false);

}

export{
     validateSyntax,
     validateInput
}
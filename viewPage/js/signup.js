
// var controller = require('./controller.js');
import * as controller from './action/controller.js';
var login_nav = document.getElementById('lo-gin');
var create_acc = document.getElementById('signup');

login_nav.onclick = () => {
        // alert("everything done");
        location.replace("../index.html");
}
// LET CHECKING SYNTAX OF 


create_acc.addEventListener('click', controller.CREATENEWACCOUNT);







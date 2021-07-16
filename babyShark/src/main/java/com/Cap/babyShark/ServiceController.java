package com.Cap.babyShark;

import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

import static com.sun.org.apache.xalan.internal.xsltc.compiler.sym.error;

/*
GET — / | displayHome()
GET — /users | getUsers()
GET — /users/:id | getUserById()
POST — users | createUser()
PUT — /users/:id | updateUser()
DELETE — /users/:id | deleteUser()
 */
@ResponseBody
@RestController
public class ServiceController {
    private UserHolder DB;
    public ServiceController(){
        // connect to database
         DB = UserHolder.getDatabase();//
    }
    @GetMapping("/rest/user")
    public String getUser(){

        return "getmethod";
    }
    @PostMapping("/rest/auth/login" )
    public String login(
            @RequestBody UserInfor newUser
    ){
        System.out.println("logging in .....");
        // checking validate syntax
        // checking validate in db
        UserInfor user = DB.selectUser(newUser);
        if(user==null){
            return "email incorrect...";
        }else{
            if(!user.getHashPW().equals(newUser.getHashPW())){
                return "password  incorrect...";
            }else{
                return "successful login....";
            }
        }


    }
    @PostMapping("/rest/auth/register")
    public String register(@Valid @RequestBody UserInfor user){
        //validate syntax--> de sau
//        if (user.hasErrors()) {
//            List<FieldError> errors = user.getFieldErrors();
//            List<String> message = new ArrayList<>();
//            error.setCode(-2);
//            for (FieldError e : errors){
//                message.add("@" + e.getField().toUpperCase() + ":" + e.getDefaultMessage());
//            }
//            error.setMessage("Update Failed");
//            error.setCause(message.toString());
//            return error;
        //validate db
        if(!DB.insertUser(user)){
            // mail is existed
            return "mail is used";
        }
        return "your account is ready";
    }
}

package com.Cap.babyShark;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UserInfor {
//    @Column(name = "mailAddress", nullable = false)
    @NotNull(message = "mail cannot be null.")
    @Size(min = 10, max = 100 ,message = "your mail is INVALID")
//    @Pattern(regexp="^([a-zA-Z0-9\\-\\.\\_]+)'+'(\\@)([a-zA-Z0-9\\-\\.]+)'+'(\\.)([a-zA-Z]{2,4})$")
    private String mail;
    @NotNull(message = "Name cannot be null.")
    private String userName;
    private String token;
    @NotNull(message = "password cannot be null.")
    @Size(min = 6, max = 100 ,message = "your password is too short")
    private String hashPW;

    public String getMail(){
        return this.mail;
    }
    public String getUsername(){
        return this.userName;
    }
    public String getToken (){
        return this.token;
    }
    public String getHashPW(){
        return this.hashPW;
    }
    //setter
    public void setMail(String mail){
        this.mail = mail;
        System.out.println(" already set mail");
    }
    public void setUserName(String userName){
        this.userName = userName;
        System.out.println("already set username");
    }

    public void setToken(String token){
        this.token = token;
        System.out.println("already set token");
    }
    public void setHashPW(String hashPW){
        this.hashPW = hashPW;
        System.out.println("already set PW");
//        System.out.println("yes or not");
//        / mxcnvxbvzxbvkbzvkbzxv

    }
}

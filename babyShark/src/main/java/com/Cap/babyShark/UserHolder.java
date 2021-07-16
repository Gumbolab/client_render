package com.Cap.babyShark;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public  class UserHolder {
    private static UserHolder Database = null;
    private Map<String, UserInfor> userDB;
    private UserHolder() {
        this.userDB  = new HashMap<>();
    }// make private constructor in order prevent from initializing new object in other class
    public static UserHolder getDatabase() {// call this method without create new object
        if (Database == null)
            Database = new UserHolder();
        return Database;
    }


    // provide query data method

    public boolean insertUser(UserInfor user){
        // checking mail is exist or not
        // if exist return false alse return true
        if(this.userDB.size()>0 && this.userDB.containsKey(user.getMail() )){
                System.out.println("this mail is already be used");
                return false;
        }else{
            this.userDB.put(user.getMail(),user);
            return true;
        }
//        return true;
    }
    public UserInfor selectUser(UserInfor user){
        // true if it exist user, else return false
        if(this.userDB.size()>0 && this.userDB.containsKey(user.getMail() )){
                return this.userDB.get(user.getMail());
        }
        return null;
    }
    public boolean updateUser(UserInfor user){
        // true if ok else return false
        return true;
    }
    // create more query

}

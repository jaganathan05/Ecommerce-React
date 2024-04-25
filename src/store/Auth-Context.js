import React, { useState } from "react";

const AuthContext = React.createContext({

    Token : null ,
    Login_Status : false,
    loginhandler : ()=>{

    },
    logouthandler : ()=>{

    }


})

export const AuthContextProvider = (props)=>{

    const [token ,settoken] = useState(null)
    const [status , updatedstatus] = useState(false)
    const LoginHandler = (Token)=>{
        settoken(Token)
        updatedstatus(true)
    }

    const LogoutHandler = ()=>{
        settoken(null)
        updatedstatus(false)
    }

    const contextvalue = {
        Token : token ,
        Login_Status : status ,
        loginhandler : LoginHandler ,
        logouthandler : LogoutHandler 
    }


    return <AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>



}


export default AuthContext;
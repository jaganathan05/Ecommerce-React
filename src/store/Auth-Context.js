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
    const inititialvalue = localStorage.getItem('token')

    const [token ,settoken] = useState(inititialvalue)
    const [status , updatedstatus] = useState(!!inititialvalue)
    const LoginHandler = (Token)=>{
        settoken(Token)
        updatedstatus(true)
        localStorage.setItem('token', Token)
    }

    const LogoutHandler = ()=>{
        settoken(null)
        updatedstatus(false)
        localStorage.removeItem('token')
    }

    const contextvalue = {
        Token : token ,
        Login_Status : status ,
        loginhandler : LoginHandler ,
        logouthandler : LogoutHandler 
    }

    console.log(contextvalue)


    return <AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>



}


export default AuthContext;
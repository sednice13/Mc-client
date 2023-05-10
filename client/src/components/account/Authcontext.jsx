import React, { useState, createContext } from "react";

export const AuthContext = createContext()


export const AuthProvider = props => {


    const [auth, setAuth] = useState({

        user: undefined,
        jwt: undefined


    })

    return (
        
        <AuthContext.Provider value={[auth, setAuth]}>
       
       {props.children}

        </AuthContext.Provider>
        
        
        )




}
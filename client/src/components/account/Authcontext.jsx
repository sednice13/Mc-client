import React, { useState, createContext } from "react";

export const UserContext = createContext()


export const AuthProvider = props => {


    const [auth, setAuth] = useState({

        username: undefined,
        jwt: undefined


    })

    return (
        
        <UserContext.Provider value={[auth, setAuth]}>
       
       {props.children}

        </UserContext.Provider>
        
        
        )




}
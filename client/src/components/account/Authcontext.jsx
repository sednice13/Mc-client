import React, { useState, createContext, useEffect} from "react";
import jwtDecode from 'jwt-decode'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = props => {
    const [auth, setAuth] = useState({})

    const login = async (user, password) => {
        const reqbody = {
            user: user,
            password: password,
        }

        try {
            const loginReq = await axios.post('http://localhost:8089/user/login', JSON.stringify(reqbody), {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            
            if (loginReq.status === 201) {

              localStorage.setItem('token', loginReq.data.accsess_token )
                const result = {

                    user: jwtDecode(loginReq.data.accsess_token)
                }
                setAuth(result)
                return loginReq
            }
        } catch (error) {
            
            throw error
        }
    }

    const connectToMinecraft = async (mcname) => {

        const reqbody = {
            username: mcname,
            token: localStorage.getItem('token'),
            sub: auth.user.sub
           
        }

        try {
            const loginReq = await axios.post('http://localhost:8089/user/mcconnect', JSON.stringify(reqbody), {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            
            if (loginReq.status === 201) {
                
                localStorage.removeItem('token')
              localStorage.setItem('token', loginReq.data.access_token )
                const result = {

                    user: jwtDecode(loginReq.data.access_token)
                }
                setAuth(result)
                return loginReq
            }
        } catch (error) {
            
            throw error
        }

    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwtDecode(token);
            setAuth({
                jwt: token,
                user: user
            });
        }
    }, [])



    return (
        <AuthContext.Provider value={{auth, setAuth, login, connectToMinecraft}}>
            {props.children}
        </AuthContext.Provider>
    )
}
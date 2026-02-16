import React, { useState, createContext, useEffect} from "react";
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { AUTH_BASE_URL } from '../../config/endpoints'

export const AuthContext = createContext()

export const AuthProvider = props => {
    const [auth, setAuth] = useState({})

    const login = async (user, password) => {
        const reqbody = {
            user: user,
            password: password,
        }

        try {
            const loginReq = await axios.post(`${AUTH_BASE_URL}/user/login`, JSON.stringify(reqbody), {
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

    const connectToMinecraft = async (mcname, verifyCode) => {

        const reqbody = {
            username: mcname,
            verifyCode: verifyCode,
            token: localStorage.getItem('token'),
            sub: auth.user.sub
           
        }

        try {
            const loginReq = await axios.post(`${AUTH_BASE_URL}/user/mcconnect`, JSON.stringify(reqbody), {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
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
    const LogOut =  () => {

        localStorage.removeItem('token')
        
        setAuth({})

        return true
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
        <AuthContext.Provider value={{auth, setAuth, login, connectToMinecraft, LogOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}

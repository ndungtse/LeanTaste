import React, { useState, useContext, Children, useEffect } from 'react'
import axios from 'axios'

export const api = axios.create({
    baseURL: "http://196.223.240.154:8099/supapp/api"
})

const AppContext = React.createContext()

export const useApp = ()=>{
    return useContext(AppContext)
}


export default function AppProvider ({children}){
    const [orders, setOrders]= useState([])
    const [user, setUser] = useState('')
    const user_token  = JSON.parse(localStorage.getItem('user'));

    const getUser = async()=>{
        const res = await api.get(`users/${user.id}`)
    }

    const getOrders = async()=>{
        // const res = await api.get(`/orders`,{
        //     headers: {
        //         "accessToken":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyNSIsInN1YiI6IjI1IiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sInVzZXIiOnsiaWQiOjI1LCJuYW1lIjoiY2FyaSBtb3VudCAxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiIxMzUzMDMiLCJtb2JpbGUiOm51bGwsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJhY2NvdW50Tm9uRXhwaXJlZCI6dHJ1ZSwiYWNjb3VudE5vbkxvY2tlZCI6dHJ1ZSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlfSwiaWF0IjoxNjUyODgwOTE3LCJleHAiOjE2NTI5NjczMTd9.ogg2SRefgDkPjkbqguvPjrRrJrRh3MKrHBLyAXSSSgbubGE881Yq7LlGZStT4H-G3FWv45Dgw7njeuja78d2jw"
        //     }
        // })
        const res1 = await fetch('http://196.223.240.154:8099/supapp/api/orders',{
            method: "GET",
            credentials: 'include',
            headers: {
                "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyNSIsInN1YiI6IjI1IiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sInVzZXIiOnsiaWQiOjI1LCJuYW1lIjoiY2FyaSBtb3VudCAxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiIxMzUzMDMiLCJtb2JpbGUiOm51bGwsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJhY2NvdW50Tm9uRXhwaXJlZCI6dHJ1ZSwiYWNjb3VudE5vbkxvY2tlZCI6dHJ1ZSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlfSwiaWF0IjoxNjUyODgwOTE3LCJleHAiOjE2NTI5NjczMTd9.ogg2SRefgDkPjkbqguvPjrRrJrRh3MKrHBLyAXSSSgbubGE881Yq7LlGZStT4H-G3FWv45Dgw7njeuja78d2jw",
                "refreshToken": "9f0cf2ca-352b-4283-b474-c69161ead78b"
            }
        })
        console.log(res1);
    }

    useEffect(()=>{
        getOrders();
    })

    return(
        <AppContext.Provider value={{orders}}>
            {children}
        </AppContext.Provider>
    )

}
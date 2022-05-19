import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const api = axios.create({
    baseURL: "http://196.223.240.154:8099/supapp/api"
})

const AppContext = React.createContext()

export const useApp =()=>{
    return useContext(AppContext)
}

export default function AppProvider ({children}){
    const [user, setUser] = useState('')
    const [orders, setOrders] = useState([])
    const user_token  = JSON.parse(localStorage.getItem('token'));

    console.log(user_token);
    const getUser = async()=>{
        const res = await api.get(`users/${user.id}`)
    }

    const getOrders = async()=>{
        const res = await fetch('http://196.223.240.154:8099/supapp/api/orders',{
            method: 'GET',
            headers: {
                "accessToken":  `Bearer ${user_token.accessToken}`,
                'Authorization': `Bearer ${user_token.accessToken}`
            } ,
        })
        const data = await res.json()
        setOrders(data.content)
        console.log(data);
        // const res = await api.get('http://196.223.240.154:8099/supapp/api/orders',{
        //     method: 'GET',
        //     headers: {
        //         "accessToken":  `Bearer ${user_token.accessToken}`,
        //         'Authorization': `Bearer ${user_token.accessToken}`
        //     } ,
        // })
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
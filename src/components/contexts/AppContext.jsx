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
    const [menus, setMenus] = useState([])
    const user_token  = JSON.parse(localStorage.getItem('token'));

    const getMenus = async()=>{
        const res = await fetch('http://196.223.240.154:8099/supapp/api/menu-items',{
            method: 'GET',
            headers: {
                "accessToken":  `Bearer ${user_token.accessToken}`,
                'Authorization': `Bearer ${user_token.accessToken}`
            } ,
        })
        const data = await res.json()
        setMenus(data.content)
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
    }

    // useEffect(()=>{
    //     getOrders();
    //     getMenus();
    // },[])

    return(
        <AppContext.Provider value={{orders, menus}}>
            {children}
        </AppContext.Provider>
    )

}
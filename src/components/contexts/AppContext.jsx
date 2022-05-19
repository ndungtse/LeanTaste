import React, { useContext, useState } from 'react'
import axios from 'axios'

export const api = axios.create({
    baseURL: "http://196.223.240.154:8099/supapp/api"
})

const AppContext = React.createContext()

const useApp =()=>{
    return useContext(AppContext)
}

export default function AppProvider ({children}){
    const [user, setUser] = useState('')
    const user_token  = JSON.parse(localStorage.getItem('user'));

    const getUser = async()=>{
        const res = await api.get(`users/${user.id}`)
    }

    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )

}
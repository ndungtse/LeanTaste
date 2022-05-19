import React, { useContext, useState } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: "196.223.240.154:8099/supapp/api"
})

const AppContext = React.createContext()

const useApp =()=>{
    return useContext(AppContext)
}

export default function AppProvider ({children}){
    const [user, setUser] = useState('')
    // const id 

    const getUser = async()=>{
        const res = await api.get(`users/`)
    }

    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )

}
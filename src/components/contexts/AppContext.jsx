import React, { useState } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: "196.223.240.154:8099/supapp/api"
})


export default function AppProvider (){
    const [user, setUser] = useState('')
    const user_token  = JSON.parse(localStorage.getItem('user'));

    const getUser = async()=>{
        const res = await api.get(`users/${user.id}`)
    }

}
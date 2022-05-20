import React, { useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { api } from "./AppContext";

const RestContext = React.createContext();

export const useRest = () => {
  return useContext(RestContext);
};

export default function RestProvider({ children }) {
    const [proCats, setProCats] = useState([])

  const user_token = JSON.parse(localStorage.getItem("token"));

  const getProCats = async()=>{
    const res = await api.get('service-provider-categories')
    console.log(res.data.content);
    setProCats(res.data.content)
  }

  useEffect(()=>{
      getProCats();
  },[])

  return (
    <RestContext.Provider value={{proCats}}
    >
      {children}
    </RestContext.Provider>
  );
}

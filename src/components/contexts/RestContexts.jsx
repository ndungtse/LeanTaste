import React, { useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { api } from "./AppContext";

const RestContext = React.createContext();

export const useRest = () => {
  return useContext(RestContext);
};

export default function RestProvider({ children }) {
  const [proCats, setProCats] = useState([]);
  const [providers, setProviders] = useState([]);
  const [user, setUser]= useState('');

  const user_token = JSON.parse(localStorage.getItem("token"));

  useEffect(()=>{
    try {
        const userinfo = jwtDecode(user_token.accessToken)
        console.log(userinfo);
        setUser(userinfo.user) 
      } catch (error) {
          console.log(error);
      }
  },[])
 
  

  const getProCats = async () => {
    const res = await api.get("service-provider-categories");
    setProCats(res.data.content);
  };

  const getProviders = async () => {
    const res = await api.get("/service-providers");
    const pros = await res.data.content;
    setProviders(pros)

  };

  useEffect(() => {
    getProCats();
    getProviders()
  }, []);

  return (
    <RestContext.Provider value={{ proCats,providers, user }}>{children}</RestContext.Provider>
  );
}

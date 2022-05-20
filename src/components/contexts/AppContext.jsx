import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import RestProvider from "./RestContexts";

export const api = axios.create({
  baseURL: "http://196.223.240.154:8099/supapp/api",
});

const AppContext = React.createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export default function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [menus, setMenus] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(undefined);

  const user_token = JSON.parse(localStorage.getItem("token"));
// console.log(user_token);
  const getSavedUser = () => {
    try {
      if (user_token !== null) {
        const user = jwtDecode(user_token.accessToken);
        setUser(user);
        setLoggedIn(true);
        return
      }
      setLoggedIn(false)
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
    }

    return;
  };

  const getMenus = async () => {
    if (user_token !== null) {
      const res = await fetch(
        "http://196.223.240.154:8099/supapp/api/menu-items",
        {
          method: "GET",
          headers: {
            accessToken: `Bearer ${user_token.accessToken}`,
            Authorization: `Bearer ${user_token.accessToken}`,
          },
        }
      );
      const data = await res.json();
      setMenus(data.content);
    }
  };

  const getOrders = async () => {
    if (user_token !== null) {
      const res = await fetch("http://196.223.240.154:8099/supapp/api/orders", {
        method: "GET",
        headers: {
          accessToken: `Bearer ${user_token.accessToken}`,
          Authorization: `Bearer ${user_token.accessToken}`,
        },
      });
      const data = await res.json();
      setOrders(data.content);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);
  useEffect(() => {
    getMenus();
  }, []);

  useEffect(() => {
    getSavedUser();
  }, []);

  return (
    <AppContext.Provider
      value={{ orders, menus, user, user_token, isLoggedIn }}
    ><RestProvider>
      {isLoggedIn !== undefined && children}
      </RestProvider>
    </AppContext.Provider>
  );
}

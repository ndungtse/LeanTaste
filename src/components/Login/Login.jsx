import React, { useState } from "react";
import "./second-form.css";
import food from "./images/food.png";
import { api } from "../contexts/AppContext";
import { Link } from 'react-router-dom'

function Login() {
  const [info, setInfo] = useState({
    login: "",
    password: "",
  });
  const [status, setStatus] = useState('')


  const login = async (e) => {
    e.preventDefault();
    console.log(info);
    const res = await api.post("/auth/signin", info);
    console.log(res.data);
    if (res.data.token) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      window.location.replace("http://localhost:3000/dashboard");
    }
    
  };

  return (
    <div className="h-screen w-full">
      <div className="parents mx-auto">
        <div className="mains">
          <div className="childs">
            <div className="doubles">
              <div className="images ml-3">
                <p className="text-3xl">
                  Lean<span className="text-green-800">Taste</span>
                </p>
                <p className="mt-2 text">Here to eat Enjoy the food</p>

                <img src={food} alt="" />
              </div>

              <div className="formss">
                <h3 className="h3 text-lg font-bold text-center mt-16">Welcome back!</h3>
                <p className="p1 mt-8">Your presence is what we are asking for to make it a memorable one! </p>

                {/* <p></p> */}
                <form action="" className="si-form" onSubmit={login}>
                  E-mail
                  <input
                    onClick={(e) => setInfo({ ...info, login: e.target.value })}
                    className="px-3 focus:border-green-800 outline-none mt-5 rounded-3xl"
                    type="text"
                    name="email"
                  />
                  <br />
                  Password
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, password: e.target.value })
                    }
                    className="px-3 focus:border-green-800 outline-none mt-5 rounded-3xl"
                    type="password"
                    name="password"
                  />
                  <br />
                  <button type="submit" className="bg-green-800 mt-10">
                    Login
                  </button>
                  <p className="mt-10 ml-28">
                    Don't have an account? <Link to='/signup'>Sign</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

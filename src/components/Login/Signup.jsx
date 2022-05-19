import React, { useState } from "react";
import "./second-form.css";
import  food  from './images/food.png'
import { api } from '../contexts/AppContext'

function Login() {
  const [info, setInfo] = useState({
     login: '', password: ''
  })

  const login = async(e)=>{
    e.preventDefault()
    console.log(info);
    const res = await api.post('/auth/signin', info)
    console.log(res.data);
    if (res.data.token) {
      localStorage.setItem('token', JSON.stringify(res.data.token))
      window.location.replace('http://localhost:3000')
    }
  }

  return (
    <div  className="h-screen w-full">
      <div className="parents mx-auto">
        <div className="mains">
          <div className="childs">
            <div className="doubles">
              <div className="images">
              <p className="text-3xl">
            Lean<span className="text-green-800">Taste</span></p>
                <p>Here to eat Enjoy the food</p>

                <img src={food} alt="" />
              </div>

              <div className="formss">
                <h3 className="h3">Welcome back</h3>
                <p className="p1">Your presence is what we are asking for </p>
                <p className="p2">to make it a memorable one! </p>

                {/* <p></p> */}
                <form action="" className="si-form" onSubmit={login}>
                  E-mail
                  <input
                   onClick={(e)=> setInfo({...info, login: e.target.value})}
                   className="px-3 focus:border-green-800 outline-none"
                   type="text" name="email" />
                  <br />
                  Password
                  <input 
                  onClick={(e)=> setInfo({...info, password: e.target.value})}
                  className="px-3 focus:border-green-800 outline-none"
                   type="password" name="password" />
                  <br />
                  <button type="submit" className="bg-green-800">Login</button>
                  <p>
                    Don't have an account? <strong>Sign</strong>
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
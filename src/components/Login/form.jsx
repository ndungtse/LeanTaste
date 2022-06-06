import React, { useState } from "react";
import { api } from "../contexts/AppContext";
import "./form.css";
import { Link } from "react-router-dom";
import food from "./images/food.png";
// import logo from '../Images/logogreen.pnp'

const Form = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const register = async (e) => {
    e.preventDefault();
    console.log(info);
    const res = await api.post("/auth/admin/signup", info);
    console.log(res.data);
    if (res.data.success === true) {
      window.location.replace("http://localhost:3000/login");
    }
  };

  return (
    <div>
        <div className="main">
          <div className="child">
            <div className="double">
              <div className="image ml-3">
                <p className="text-3xl">
                  Lean<span className="text-green-800">Taste</span>
                </p>
                <p>Here to eat Enjoy the food</p>

                <img src={food} alt="" />
              </div>

              <div className="forms">
                <form action="" className=" h-[90%]"  onSubmit={register}>
                  <h3 className="text-2xl font-lg">Sign Up</h3>
                  <div className="w-4/5 flex justify-around">
                  <h2>Firstname:</h2>
                  <input
                    onClick={(e) =>
                      setInfo({ ...info, firstName: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="text"
                    name="firstname"
                  />
                  </div>
                  
                    <div className="w-4/5 flex justify-around">
                  <h2>LastName</h2>
                  <input
                    onClick={(e) =>
                      setInfo({ ...info, lastName: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="text"
                    name="lastname"
                  />
                  </div>
                    <div className="w-4/5 flex justify-around">
                 <h2>E-mail</h2>
                 
                  <input
                    onClick={(e) => setInfo({ ...info, email: e.target.value })}
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="text"
                    name="email"
                  />
                  </div>
                    <div className="w-4/5 flex justify-around">
                  <h2>Phone</h2>
                  
                  <input
                    onClick={(e) =>
                      setInfo({ ...info, mobile: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="number"
                    name="phone"
                  />
                  </div>
                    <div className="w-4/5 flex justify-around">
                  <h2>Password</h2>
                  <input
                    onClick={(e) =>
                      setInfo({ ...info, password: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="password"
                    name="password"
                  />
                  </div>
                  <button className="button text-green-800" type="submit">
                    Sign Up
                  </button>
                  <p className="ml-40">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-green-800"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Form;

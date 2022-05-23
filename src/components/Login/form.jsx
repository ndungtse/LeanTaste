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
                <form action="" onSubmit={register}>
                  <h3>Sign Up</h3>
                  FirstName
                  <input
                    onClick={(e) =>
                      setInfo({ ...info, firstName: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="text"
                    name="firstname"
                  />
                  <br />
                  LastName
                  <input
                    onClick={(e) =>
                      setInfo({ ...info, lastName: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="text"
                    name="lastname"
                  />
                  <br />
                  E-mail
                  <br></br>
                  <input
                    onClick={(e) => setInfo({ ...info, email: e.target.value })}
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="text"
                    name="email"
                  />
                  <br />
                  phone
                  <br />
                  <input
                    onClick={(e) =>
                      setInfo({ ...info, mobile: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="number"
                    name="phone"
                  />
                  <br />
                  Password
                  <input
                    onClick={(e) =>
                      setInfo({ ...info, password: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="password"
                    name="password"
                  />
                  <br />
                  <button className="button text-green-800" type="submit">
                    Sign Up
                  </button>
                  <p className="ml-44 mt-10">
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

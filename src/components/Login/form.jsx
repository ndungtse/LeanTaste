import React from "react";
import "./form.css";
import food from "./images/food.png";
// import logo from '../Images/logogreen.pnp'

const Form = () => {
  return (
    <div >
      <div className="parent mx-auto">
        <div className="main">
          <div className="child">
            <div className="double">
              <div className="image">
                <p className="text-3xl">
            Lean<span className="text-green-800">Taste</span></p>
                <p>Here to eat Enjoy the food</p>

                <img src={food} alt="" />
              </div>

              <div className="forms">
                <form action="">
                  <h3>SIGNUP</h3>
                  FirstName
                  <input className="px-3 focus:border-2 border-green-800
                   outline-none" type="text" name="firstname" />
                  <br />
                  LastName
                  <input className="px-3 focus:border-2 border-green-800
                   outline-none" type="text" name="lastname" />
                  <br />
                  E-mail
                  <br></br>
                  <input className="px-3 focus:border-2 border-green-800
                   outline-none" type="text" name="email" />
                  <br />
                  phone
                  <br />
                  <input className="px-3 focus:border-2 border-green-800
                   outline-none" type="number" name="phone" />
                  <br />
                  Password
                  <input className="px-3 focus:border-2 border-green-800
                   outline-none" type="password" name="password" />
                  <br />
                  <button className="button">Sign Up</button>
                  <p>
                    Already have an account? <strong>Login</strong>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;

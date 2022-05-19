import React from "react";
import "./second-form.css";
import  food  from './images/food.png'

function Login() {
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
                <form action="" className="si-form">
                  E-mail
                  <input className="px-3 focus:border-green-800 outline-none"
                   type="text" name="email" />
                  <br />
                  Password
                  <input className="px-3 focus:border-green-800 outline-none"
                   type="password" name="password" />
                  <br />
                  <button>Login</button>
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

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
	const [status, setStatus] = useState("");

	const register = async (e) => {
		e.preventDefault();
		console.log(info);
		try {
			const res = await api.post("/auth/admin/signup", info);
			console.log(res.data);
			if (res.data.success === true) {
				window.location.replace("http://localhost:3000/login");
			}
		} catch (error) {
			if (error.response.data.apierror.message) {
				console.log(error.response.data.apierror.message);
				setStatus(error.response.data.apierror.message);
			}
		}
	};

	return (
		<div className="w-full h-screen flex flex-col">
			<p className="text-3xl mt-5 ml-6">
				Lean<span className="text-green-800">Taste</span>
			</p>
			<div className="flex h-full px-3 w-full">
				<div className="flex flex-col w-1/2 h-full translate-y-[-100px] items-center justify-center">
          <img className="w-[200px]" src="./src/food.png" alt="food" />
					<p className="text-3xl text-center">Join LeanTaste and find  a thousand of restaurant and order your favorite food</p>
				</div>
				<div className="flex flex-col w-1/2 h-full items-center justify-center">
          <form onSubmit={register} className="rounded-2xl min-w-[280px] text-xl items-center p-4 bg-opacity-10 text- text-black bg-slate-900 flex flex-col w-2/3">
              <h1 className="text-2xl font-bold">Signup</h1>
              <p className="text-red-500">{status}</p>
              <div className="flex flex-col mt-4 w-full px-[2%]">
                <label htmlFor="">FirstName</label>
                <input 
                  onChange={(e)=> setInfo({...info, firstName: e.target.value})}
                type="text"  className="w-full px-2 outline-none bg-transparent border-2 border-black rounded-xl h-[45px]" />
              </div>
              <div className="flex flex-col mt-4 w-full px-[2%]">
                <label htmlFor="">LastName</label>
                <input
                onChange={(e)=> setInfo({...info, lastName: e.target.value})}
                 type="text"  className="w-full px-2 outline-none bg-transparent border-2 border-black rounded-xl h-[45px]" />
              </div>
              <div className="flex flex-col mt-4 w-full px-[2%]">
                <label htmlFor="">E-mail</label>
                <input
                  onChange={(e)=> setInfo({...info, email: e.target.value})}
                 type="text"  className="w-full px-2 outline-none bg-transparent border-2 border-black rounded-xl h-[45px]" />
              </div>
              <div className="flex flex-col mt-4 w-full px-[2%]">
                <label htmlFor="">Phone</label>
                <input
                  onChange={(e)=> setInfo({...info, mobile: e.target.value})}
                 type="text"  className="w-full px-2 outline-none bg-transparent border-2 border-black rounded-xl h-[45px]" />
              </div>
              <div className="flex flex-col mt-4 w-full px-[2%]">
                <label
                 htmlFor="">Password</label>
                <input
                 onChange={(e)=> setInfo({...info, password: e.target.value})}
                 type="password"  className="w-full px-2 outline-none bg-transparent border-2 border-black rounded-xl h-[45px]" />
              </div>
              <div className="flex flex-col mt-4 w-1/2 px-[2%] text-white">
                <input type="submit"  className="w-full cursor-pointer px-2 rounded-xl outline-none bg-green-900 h-[45px]" />
              </div>
              <div className="flex w-full justify-center mt-5">
                <p>Already have an account?</p>
                <Link className="text-green-900 ml-3 font-semibold" to='/login'>Login</Link>
              </div>
          </form>
				</div>
			</div>
		</div>
	);
};
export default Form;

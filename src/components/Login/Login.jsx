import React, { useState } from "react";
import "./second-form.css";
import food from "./images/food.png";
import { api } from "../contexts/AppContext";
import { Link } from "react-router-dom";

function Login() {
	const [info, setInfo] = useState({
		login: "",
		password: "",
	});
	const [status, setStatus] = useState("");

	const login = async (e) => {
		e.preventDefault();
		console.log(info);
		try {
			const res = await api.post("/auth/signin", info);
			console.log(res.data);
			if (res.data.token) {
				localStorage.setItem("token", JSON.stringify(res.data.token));
				window.location.replace("http://localhost:3000/dashboard/overview");
			}
		} catch (error) {
			if (error.response.data.apierror.message) {
				console.log(error.response.data.apierror.message);
				setStatus(error.response.data.apierror.message);
			}
		}
		c;
	};

	return (
		<div className="w-full h-screen flex flex-col">
			<p className="text-3xl mt-5 ml-6">
				Lean<span className="text-green-800">Taste</span>
			</p>
			<div className="flex h-full px-3 w-full">
				<div className="flex flex-col w-1/2 h-full items-center justify-center">
					<img className="w-[200px]" src="./src/food.png" alt="food" />
					<p className="text-3xl text-center">
						Join LeanTaste and find a thousand of restaurant and order your
						favorite food
					</p>
				</div>
				<div className="flex flex-col w-1/2 h-full items-center justify-center">
					<form
						onSubmit={login}
						className="rounded-2xl text-xl min-w-[280px] items-center p-4 bg-opacity-10 text- text-black bg-slate-900 flex flex-col w-2/3"
					>
						<h1 className="text-2xl font-bold">Login</h1>
						<p className="text-red-500">{status}</p>
						<div className="flex flex-col mt-4 w-full px-[2%]">
							<label htmlFor="">E-mail</label>
							<input
								onChange={(e) => setInfo({ ...info, login: e.target.value })}
								type="text"
								className="w-full px-2 outline-none bg-transparent border-2 border-black rounded-xl h-[50px]"
							/>
						</div>
						<div className="flex flex-col mt-4 w-full px-[2%]">
							<label htmlFor="">Password</label>
							<input
								onChange={(e) => setInfo({ ...info, password: e.target.value })}
								type="password"
								className="w-full px-2 outline-none bg-transparent border-2 border-black rounded-xl h-[50px]"
							/>
						</div>
						<div className="flex flex-col mt-6 w-1/3 min-w-[150px] px-[2%] text-white">
							<input
								type="submit"
								className="w-full cursor-pointer px-2
								rounded-xl outline-none bg-green-900 h-[40px]"
							/>
						</div>
						<div className="flex w-full justify-center mt-5">
							<p>Don't have an account?</p>
							<Link className="text-green-900 ml-3 font-semibold" to="/signup">
								Sign Up
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;

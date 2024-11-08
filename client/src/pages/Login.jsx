import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from 'react-toastify';

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const naviget = useNavigate();

  const { storeTokenInLS } = useAuth();

  const hendelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await fetch("http://localhost:9000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      console.log("login responce",responce);

      const res_data = await responce.json();
      console.log("login123",res_data);
      
      if (responce.ok) {

        storeTokenInLS(res_data.token);
        setInput({
          email: "",
          password: "",
        });
        toast.success("Login Successful ")
        naviget("/");
      }else{
        toast.error(res_data.message)
        console.log("login error",responce);
      }
      
    } catch (error) {
      console.log("login error", error);
    }
    console.log(input);
  };
  return (
    <section className="login">
      <div className="container">
        <div className="main">
          <h1>LOgin Form</h1>
          <form onSubmit={handelSubmit}>
            <div className="login_input">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
                placeholder="Enter your Email"
                value={input.email}
                onChange={hendelInput}
              />
            </div>

            <div className="login_input">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                autoComplete="off"
                placeholder="Enter your Email"
                value={input.password}
                onChange={hendelInput}
              />
            </div>

            <div className="but">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/Auth"
import { toast } from 'react-toastify';

const Register = () => {
  const [input, serInput] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const naviget = useNavigate();

  const {storeTokenInLS} = useAuth()

  const hendelChangr = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    serInput({ ...input, [name]: value });
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:9000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const res_data = await response.json()
      const error = res_data.message
      console.log("res from register",error);
      // console.log(response);

      if (response.ok) {
       
        storeTokenInLS(res_data.token)
        serInput({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("Registration Successful ")
        naviget("/");
      }else{
        toast.error(error)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="register">
      <div className="container">
        <main className="regi_main">
          <div className="registration">
            <h1>Registrtion Form</h1>

            <form onSubmit={handelSubmit}>
              <div className="input">
                <label htmlFor="username">UserName:</label>
                <input
                  type="text"
                  name="username"
                  value={input.username}
                  placeholder="Enter Your UserName"
                  id="username"
                  required
                  autoComplete="off"
                  onChange={hendelChangr}
                />
              </div>

              <div className="input">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  placeholder="Enter Your Email"
                  id="email"
                  required
                  autoComplete="off"
                  onChange={hendelChangr}
                />
              </div>

              <div className="input">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="number"
                  name="phone"
                  value={input.phone}
                  placeholder="Enter Your Phone"
                  id="phone"
                  required
                  autoComplete="off"
                  onChange={hendelChangr}
                />
              </div>

              <div className="input">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  placeholder="Enter Your Password"
                  id="password"
                  required
                  autoComplete="off"
                  onChange={hendelChangr}
                />
              </div>
              <div className="but">
                <button type="submit">Register Now</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;

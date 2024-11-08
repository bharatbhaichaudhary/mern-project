import React, { useState, useEffect } from "react";
import "./contect.css";
import { useAuth } from "../store/Auth";

const defaultContectForm = {
  username: "",
  email: "",
  message: "",
};

const Contect = () => {
  const [input, setInput] = useState(defaultContectForm);
  const { user } = useAuth();

  // Autofill form if user is logged in
  useEffect(() => {
    if (user) {
      setInput({
        username: user.username,
        email: user.email,
        message: "",
      });
    }
  }, [user]);

  const handelInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/api/form/contect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (response.ok) {
        setInput(defaultContectForm);
        alert("Message sent successfully");
      }
      console.log(response, input);
    } catch (error) {
      console.log("Contact response error", error);
    }
  };

  return (
    <section className="contect">
      <div className="container">
        <div className="contect_main">
          <h1 className="contect-name">Contact Us</h1>
          <form onSubmit={handelSubmit}>
            <div className="con_input">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                value={input.username}
                placeholder="Enter your Name"
                required
                autoComplete="off"
                onChange={handelInput}
              />
            </div>
            <div className="con_input">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={input.email}
                placeholder="Enter your Email"
                required
                autoComplete="off"
                onChange={handelInput}
              />
            </div>
            <div className="con_input">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={input.message}
                placeholder="Enter Message"
                autoComplete="off"
                onChange={handelInput}
              ></textarea>
            </div>
            <div className="but">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contect;

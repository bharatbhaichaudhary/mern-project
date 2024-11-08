import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import pakshi from "../../img/about-page.jpg"
import { useAuth } from "../store/Auth";

const About = () => {

  const {user} =useAuth()

  return (
    <section className="about">
      <div className="container">
        <div className="about_image">
          <h3 className="username">Wellcome { user.username}</h3>
          <img src={pakshi}/>
        </div>
        <div className="about_text">
          <h1>BOOST YOUR</h1>
          <h1>ONLINE BUSINESS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          </p>
          <div>
            <Link to="/contect" className="get_contect">GET CONTECT</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

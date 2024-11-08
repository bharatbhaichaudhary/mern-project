import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../store/Auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className="header">
      <div className="container">
        <div className="logo-band">
          <h2>LOGO</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li className="nev_li">
              <NavLink className="nav_link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nev_li">
              <NavLink className="nav_link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nev_li">
              <NavLink className="nav_link" to="/contect">
                Contect
              </NavLink>
            </li>
            <li className="nev_li">
              <NavLink className="nav_link" to="/servise">
                Servise
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className="nev_li">
                <NavLink className="nav_link" to="/logout">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nev_li">
                  <NavLink className="nav_link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nev_li">
                  <NavLink className="nav_link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

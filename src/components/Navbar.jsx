import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const {theme,toggleTheme} = useContext(ThemeContext);

  return (
    <nav className="navbar">
     <div className="logo">
        <img src="/images/Logo.png"alt="Logo" className="logo-image" />
        Event Management Platform
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/events">
            Home
          </Link>
        </li>

        <li>
          <Link to="/my-bookings">
            My Bookings
          </Link>
        </li>

        <li>
          <Link to="/create-event">
            Create Event
          </Link>
        </li>

        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>

      </ul>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}

export default Navbar;
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Navigation">
      <img src="./icons_assets/logo.svg" alt="Logo" />
      <ul className="Navigation-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Menu</NavLink>
        </li>
        <li>
          <NavLink to="/booking">Reservation</NavLink>
        </li>
        <li>
          <NavLink>Order Online</NavLink>
        </li>
        <li>
          <NavLink>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

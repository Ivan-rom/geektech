import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Main page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Portfolio page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/homework"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Homework page
        </NavLink>
      </li>
    </ul>
  );
}

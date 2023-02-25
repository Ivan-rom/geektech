import { Outlet } from "react-router-dom";
import Navbar from "../navBar/navBar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <h2>Footer</h2>
    </>
  );
}

import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}> Главная</Link>
          </li>
          <li>
            <Link to={"/posts"}> Посты</Link>
          </li>
          <li>
            <Link to={"/about"}> О нас</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

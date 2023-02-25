import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const login = () => {
    setTimeout(() => {
      navigate("/", { state: "user_name_ivan" });
    }, 3000);
  };

  return (
    <>
      <input type="text" placeholder="login" />
      <input type="text" placeholder="password" />
      <button onClick={login}>Log in</button>
    </>
  );
}

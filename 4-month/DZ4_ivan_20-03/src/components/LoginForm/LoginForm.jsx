import { useState } from "react";
import styles from "./loginForm.module.css";
import Button from "../Button/Button";

function LoginForm({ display, closeForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [check, setCheck] = useState(false);

  // регулярное выражение для почты
  const emailRegExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  // 6 и больше символов в пароле
  const passwordRegExp = /[0-9a-zA-Z!@#$%^&*]{6,}/g;

  function formHandler(e) {
    e.preventDefault();
    if (
      email.match(emailRegExp) &&
      password.match(passwordRegExp) &&
      password === rPassword
    ) {
      alert("Форма отправлена!");
    } else {
      alert("Вы что-то заполнили не так!");
    }
  }

  return (
    <div
      className={styles.modal}
      style={{ display: display }}
      // Закрытие формы
      onClick={() => closeForm("none")}
    >
      <div
        className={styles.modal_content}
        // отмена закрытия при клике на контентную часть
        onClick={(e) => e.stopPropagation()}
      >
        <form action="#" className={styles.form} onSubmit={formHandler}>
          <h2>Sign in</h2>
          <label>
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={check}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={check}
            />
          </label>
          <label>
            Repeat password:
            <input
              type="password"
              value={rPassword}
              onChange={(e) => setRPassword(e.target.value)}
              disabled={check}
            />
          </label>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={check}
                onChange={() => setCheck((prev) => !prev)}
              />
              I agree with all information
            </label>
          </div>
          <Button
            text="Sign in"
            isDisabled={!check}
            className={check && "disabledButton"}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

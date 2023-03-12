import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/usersSlice";

function CreateUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { loading, error, created } = useSelector(
    (state) => state.usersReducer
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <>
      <h1>Create</h1>
      <form action="#" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Create user</button>
      </form>

      {loading ? (
        <h4 style={{ color: "blue" }}>Пользователь создается</h4>
      ) : created ? (
        <h4 style={{ color: "green" }}>Пользователь создан</h4>
      ) : (
        error && <h4 style={{ color: "red" }}>Ошибка {error}</h4>
      )}
    </>
  );
}

export default CreateUserPage;

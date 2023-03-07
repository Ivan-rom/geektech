import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/User/User";
import { addUser } from "../../store/usersSlice";

function UsersPage() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);

  const addUserFn = () => {
    dispatch(addUser(inputValue));
    setInputValue("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addUserFn}>add user</button>
      <ul>
        {users.map((user) => (
          <User userInfo={user} key={user.id} />
        ))}
      </ul>
    </>
  );
}

export default UsersPage;

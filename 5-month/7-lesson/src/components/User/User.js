import { useDispatch } from "react-redux";
import { getUser, modalOn } from "../../store/usersSlice";

function User({ user }) {
  const dispatch = useDispatch();

  const getUserFn = () => {
    dispatch(getUser(user.id));
    dispatch(modalOn());
  };

  return (
    <li onClick={getUserFn} style={{ cursor: "pointer" }}>
      {user.name}
    </li>
  );
}

export default User;

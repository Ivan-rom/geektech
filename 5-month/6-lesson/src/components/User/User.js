import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/usersSlice";

function User({ userInfo }) {
  const dispatch = useDispatch();

  return (
    <li
      onDoubleClick={() => dispatch(deleteUser(userInfo.id))}
      style={{ cursor: "pointer" }}
    >
      {userInfo.username}
    </li>
  );
}

export default User;

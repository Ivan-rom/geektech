import { useDispatch, useSelector } from "react-redux";
import { modalOff } from "../../store/usersSlice";

function ModalUser() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.usersReducer);

  return (
    <div className="modal">
      <div className="modal_card">
        <button onClick={() => dispatch(modalOff())}>x</button>

        <ul>
          <li>name: {user.name}</li>
          <li>username: {user.username}</li>
          <li>email: {user.email}</li>
          <li>website: {user.website}</li>
          <li>phone: {user.phone}</li>
        </ul>
      </div>
    </div>
  );
}

export default ModalUser;

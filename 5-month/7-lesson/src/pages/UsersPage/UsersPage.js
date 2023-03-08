import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalUser from "../../components/ModalUser/ModalUser";
import User from "../../components/User/User";
import { getUser, getUsers } from "../../store/usersSlice";

function UsersPage() {
  const dispatch = useDispatch();

  const { users, preloader, modal } = useSelector(
    (state) => state.usersReducer
  );

  const getUsersFn = () => {
    dispatch(getUsers());
  };

  useEffect(getUsersFn, []);

  return (
    <>
      <ul>
        {preloader ? (
          <h2>Loading...</h2>
        ) : (
          users.map((user) => (
            <User user={user} key={user.id} onClick={getUser} />
          ))
        )}
      </ul>
      {modal && <ModalUser />}
    </>
  );
}

export default UsersPage;

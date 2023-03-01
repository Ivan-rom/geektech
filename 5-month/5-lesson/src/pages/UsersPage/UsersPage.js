import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction, sayHelloAction } from "../../redux/actions";

function UsersPage() {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.titleReducer);
  const { users } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <>
      <h1>Users list</h1>
      <h1>{title}</h1>
      <button onClick={() => dispatch(sayHelloAction())}>
        Say hello after 3 seconds
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersPage;

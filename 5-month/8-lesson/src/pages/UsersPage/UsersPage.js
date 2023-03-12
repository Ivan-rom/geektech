import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/User/User";
import { getUsers } from "../../store/usersSlice";

function UsersPage() {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <h4>Loading</h4>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        <ul>
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default UsersPage;

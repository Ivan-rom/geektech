import { useDispatch } from "react-redux";
import { changeStatusAction, deleteTodoAction } from "../../redux/actions";

function Todo({ todoInfo }) {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(deleteTodoAction(todoInfo.id));
  };

  const checkedTodo = (e) => {
    const info = {
      status: e.target.checked,
      id: todoInfo.id,
    };
    dispatch(changeStatusAction(info));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input type="checkbox" onChange={checkedTodo} />
      {todoInfo.status ? <s>{todoInfo.text}</s> : <span>{todoInfo.text}</span>}
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
}

export default Todo;

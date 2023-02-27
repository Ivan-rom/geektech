import { useDispatch, useSelector } from "react-redux";
import Todo from "../../components/Todo/Todo";
import { addTodoAction, changeTodoInputAction } from "../../redux/actions";

export default function TodosPage() {
  const dispatch = useDispatch();
  const { todoValue, todos } = useSelector((state) => state);

  const changeInput = (e) => {
    dispatch(changeTodoInputAction(e.target.value));
  };

  const addTodo = () => {
    dispatch(addTodoAction(todoValue));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Todo"
        onChange={changeInput}
        value={todoValue}
      />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => (
        <Todo todoInfo={todo} key={todo.id} />
      ))}
    </>
  );
}

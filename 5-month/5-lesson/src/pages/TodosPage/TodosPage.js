import { useDispatch, useSelector } from "react-redux";
import Todo from "../../components/Todo/Todo";
import {
  addTodoAction,
  changeTitleAction,
  changeTodoInputAction,
} from "../../redux/actions";

export default function TodosPage() {
  const dispatch = useDispatch();
  const { todoValue, todos } = useSelector((state) => state.todoReducer);
  const { title } = useSelector((state) => state.titleReducer);

  const changeInput = (e) => {
    dispatch(changeTodoInputAction(e.target.value));
  };

  const addTodo = () => {
    dispatch(addTodoAction(todoValue));
  };

  const changeTitle = () => {
    dispatch(changeTitleAction());
  };

  return (
    <>
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Todo"
        onChange={changeInput}
        value={todoValue}
      />
      <button onClick={addTodo}>Add todo</button>

      <button onClick={changeTitle}>Say hello</button>

      {todos.map((todo) => (
        <Todo todoInfo={todo} key={todo.id} />
      ))}
    </>
  );
}

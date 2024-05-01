import s from "./TodoList.module.css";

export const TodoItem = ({
  todo,
  completed,
  id,
  handleDelete,
  handleToggleTodo,
}) => {
  return (
    <li className={s.item}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleToggleTodo(id)}
      />
      <span>{todo}</span>
      <button
        className={s.btn}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

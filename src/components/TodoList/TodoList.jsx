import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import s from "./TodoList.module.css";
import todosData from "../../assets/todos.json";
import { nanoid } from "nanoid";

export const TodoList = () => {
  const [todo, setTodo] = useState(() => {
    return JSON.parse(window.localStorage.getItem("todos")) || todosData;
  });

  useEffect(() => {
    window.localStorage.setItem(("todos"), JSON.stringify(todo));
  }, [todo]);

  const [title, setTitle] = useState("");

  const handleDelete = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddTodo = () => {
    const newToto = {
      todo: title,
      id: nanoid(),
      completed: false,
    };
    setTodo((prev) => [...prev, newToto]);
    setTitle("");
  };

  const handleToggleTodo = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className={s.wrapper_todo}>
      <div className={s.todo_top}>
        <input
          type="text"
          className={s.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className={s.btn}
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todo.map((item) => {
          return (
            <TodoItem
              key={item.id}
              {...item}
              handleDelete={handleDelete}
              handleToggleTodo={handleToggleTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

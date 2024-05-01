import "./App.css";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { Counter } from "./components/Counter/Counter";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <Counter />
      <ColorPicker />
      <TodoList />
    </>
  );
}

export default App;

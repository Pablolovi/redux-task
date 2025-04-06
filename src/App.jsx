/* src/App.jsx */
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, setTodos } from "./redux/todosSlice";
import { useEffect, useState } from "react";

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      dispatch(setTodos(storedTodos));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = ()=> {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }else {
      alert("Escribe una tarea antes de agregarla.");
    }
  };
  
  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="app-container">
      <h1 className="title"> Lista de Tareas</h1>

      <div className="from">
        <input
          className="input"
          type="text"
          placeholder="Escribe una tarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn-add" onClick={handleAdd} aria-label="Agregar tarea">
         Agregar
        </button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <button className="btn-delete" onClick={() => handleDelete(todo.id)}>
            ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

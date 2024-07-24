import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const agregarTarea = (evento) => {
    evento.preventDefault(); // Previene el comportamiento por defecto del formulario
    setTodos([...todos, todo]); // Agrega la tarea actual al array de tareas
    setTodo(""); // Limpia el input
  };
  const quitarTarea = (index) => {
    const nuevasTareas = [...todos];
    nuevasTareas.splice(index, 1);
    setTodos(nuevasTareas);
  }
    return (
      <div className="text-center container">
        <h1 className="text-center mt-5">ToDo List</h1>
        <form onSubmit={agregarTarea}>
          <div className="mb-3">
            <label for="inputToDoList" className="form-label">
              Task
            </label>
            <input
              type="text"
              className="form-control"
              id="inputToDoList"
              placeholder="What needs to be done?"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
            />
            <button className="btn btn-success mt-3 mb-3" type="submit">
			Add task
            </button>
            <p>ToDo´s:{todo}</p>
            <div className="container text-center col">
              <ul className="list-group">
                {todos.map((tarea, index) => (
                  <li key={index} className="list-group-item">
                    {tarea}
                    <button
                      type="button"
                      class="btn-close m-auto"
                      onClick={() => {
                        quitarTarea();
                      }}
                      aria-label="Close"
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
            <div id="emailHelp" className="form-text">
              Hecho por Bernardo Nurvia
            </div>
          </div>
        </form>
      </div>
	);
  
};

export default Home;

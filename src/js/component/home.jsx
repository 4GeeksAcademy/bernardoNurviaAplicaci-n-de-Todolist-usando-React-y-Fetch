import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const agregarTarea = (evento) => {
    evento.preventDefault(); // Previene el comportamiento por defecto del formulario
    todo === "" ? alert("Please enter task") : setTodos([...todos, todo]); // Agrega la tarea actual al array de tareas
    setTodo(""); // Limpia el input
  };
  const quitarTarea = (index) => {
    const nuevasTareas = [...todos];
    nuevasTareas.splice(index, 1);
    setTodos(nuevasTareas);
  };

  return (
    <div>
      <div className="text-center container card mt-3 ">
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
          </div>
        </form>
      </div>
      <div className="container text-center mt-2 col">
        <ul className="list-group">
          {todos.map((tarea, index) => (
            //   <li key={index} className="bg-info list-group-item card ">
            //     {tarea}
            //     <button
            //       type="button"
            //       class="btn-close m-auto"
            //       onClick={() => {
            //         quitarTarea();
            //       }}
            //       aria-label="Close"
            //     ></button>
            //   </li>
            <div class="form-check bg-info list-group-item ">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                {tarea}
              </label>
              <button
                type="button"
                class="btn-close m-auto"
                onClick={() => {
                  quitarTarea();
                }}
                aria-label="Close"
              ></button>
            </div>
          ))}
        </ul>
      </div>
      <div id="emailHelp" className="fixed-bottom text-center">
        Made by Bernardo Nurvia
      </div>
    </div>
  );
};

export default Home;

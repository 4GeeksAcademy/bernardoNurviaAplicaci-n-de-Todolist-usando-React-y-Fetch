import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); console.log(todo);

  useEffect(() => {
    obtenerTareas();
  }, []);
  const crearAgenda = () => {
    fetch('https://playground.4geeks.com/todo/users/BernardoNurvia', {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        console.log(resp.ok); // Será true si la respuesta es exitosa
        console.log(resp.status); // El código de estado 200, 300, 400, etc.

        return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
      })
      .then(data => {
        // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
        obtenerTareas();
      })
      .catch(error => {
        // Manejo de errores
        console.log(error);
      });
  };

  const obtenerTareas = () => {
    fetch("https://playground.4geeks.com/todo/users/BernardoNurvia", {
      method: "GET",

      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          crearAgenda()
        } else {
          return response.json()
        }
      })
      .then(data => {
        setTodos(data.todos);
        console.log(data)
      })
  };

  const agregarTarea = (evento) => {
    evento.preventDefault(); // Previene el comportamiento por defecto del formulario
    todo === "" ? alert("Please enter task") : setTodos([...todos, todo]); // Agrega la tarea actual al array de tareas
    setTodo(""); // Limpia el input

    const bodyTodoPost =
    {
      "label": todo,
      "is_done": false
    };

    fetch('https://playground.4geeks.com/todo/todos/BernardoNurvia', {
      method: "POST",
      body: JSON.stringify(bodyTodoPost),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        console.log(resp.ok); // Será true si la respuesta es exitosa
        console.log(resp.status); // El código de estado 200, 300, 400, etc.

        return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
      })
      .then(data => {
        console.log(data);
        setTodos([...todos, data]);
        setTodo("");
        // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        // Esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch(error => {
        // Manejo de errores
        console.log(error);
      });

  };

  const quitarTarea = (todoId) => {
    const nuevasTareas = [...todos, todo];
    nuevasTareas.splice(todoId, 1);
    setTodos(nuevasTareas);
    fetch("https://playground.4geeks.com/todo/todos/" + todoId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          obtenerTareas();
        } else {
          console.error("Error al eliminar la tarea");
        }
      })
      .catch(error => {
        console.error(error);
      })

  };

  const tareaHecha = (todoId, todoLabel, todoDone) => {
    console.log("funciona");

    const bodyTodoCheckOk =
    {
      "label": todoLabel,
      "is_done": !todoDone
    };
    fetch("https://playground.4geeks.com/todo/todos/" + todoId, {
      method: "PUT",
      body: JSON.stringify(bodyTodoCheckOk),
      headers: {
        "Content-Type": "application/json"
      }

    })
      .then(response => {
        if (response.ok) {
          obtenerTareas();
        } else {
          console.error("Error al eliminar la tarea");
        }
      })
      .catch(error => {
        console.error(error);
      })
  };

  const ClearAllTasks = (() => {
    fetch('https://playground.4geeks.com/todo/users/BernardoNurvia', {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          obtenerTareas();
        } else {
          console.error("Error al eliminar la tarea");
        }
      })
      .then(data => {
        // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
        obtenerTareas();
      })
      .catch(error => {
        // Manejo de errores
        console.log(error);
      });
  })

  return (
    <div className="">

        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>

      <div className="text-center container card mt-2 ">
        <h1 className="text-center mt-2">ToDo List</h1>
        <form onSubmit={agregarTarea}>
          <div className="mb-2">
            <label htmlFor="inputToDoList" className="form-label">
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
            <button className="btn btn-success mt-2 mb-2" type="submit">
              Add task
            </button>
            <p>To Dos:{todo}</p>
          </div>
        </form>
      </div>
      <div className="container text-center mt-2 col">
        <ul className="list-group">
          {todos.map((tarea, todoId) => (
            <div className="form-check bg-info list-group-item d-flex justify-content-between" key={tarea.id}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={tarea.is_done}
                id="flexCheckDefault"
                onChange={() => {
                  tareaHecha(tarea.id, tarea.label, tarea.is_done)
                }}
              />
              <label key={tarea.id} className="form-check-label" htmlFor="flexCheckDefault">
                {tarea.label}
              </label>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  quitarTarea(tarea.id);
                }}
                aria-label="Close"
              ></button>
            </div>
          ))}
        </ul>
        <div className="d-flex justify-content-evenly mt-2">
          <button className="btn btn-primary" onClick={() => { obtenerTareas() }}>
            Get tasks
          </button>
          <button className="btn btn-danger" onClick={() => { ClearAllTasks() }}>
            Clear all tasks
          </button>
        </div>
      </div>
      <div id="emailHelp" className="fixed-bottom text-center">
        <a href="www.linkedin.com/in/bernardo-patiño-46431739">Made by Bernardo Nurvia</a>
      </div>
    </div>
  );
};

export default Home;

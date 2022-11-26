import React from "react";

function Tasks({ tasks, scenario, changeText }) {
  return (
    <div>
      <section>
        <h1>Tareas</h1>
        <p>Escenarion: {scenario}</p>
      </section>
      <section>
        {tasks.map((task, index) => {
          const { texto, tipoTarea, respuesta, tiempo } = task;
          return (
            <div key={index}>
              <p><strong>Tarea {index + 1}</strong></p>
              <p><strong>{changeText(texto)}</strong></p>
              {tipoTarea === "opinionScale5" ? (
                <h2>Respuesta: {respuesta}</h2>
              ) : null}
              <p>duracion de la tarea: {tiempo}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Tasks;

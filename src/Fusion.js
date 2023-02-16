import React, { useState, useRef, useEffect } from 'react';
import './Block.css';
import add from './images/Add To do.png';
import Task from './Task.js';


const AppDragDrop = () => {   
  const [arrayTasks, setArrayTasks] = useState ([
    {
      id: 0,
      nameTask: "Completar Guion",
      status: "ToDo",
    },
    {
      id: 1,
      nameTask: "Grabar video",
      status: "ToDo",
    },
    {
      id: 2,
      nameTask: "Editar video",
      status: "ToDo",
    },
    {
      id: 3,
      nameTask: "Aprobar Tema",
      status: "Done",
    },
    {
      id: 4,
      nameTask: "Instalar editor de video",
      status: "Done",
    }
  ]);

  const dragItem = useRef(); //arrastar elemento
  const dragOverItem = useRef(); //arrastras sobre elemento

    let obj = {
        ToDo: [],
        Done: []
    }

    const dragStart = (e,position) => {
      e.dataTransfer.setData("id", position); 
      /*dataTransfer almacena info del evento drag, 
          setData establece una clave y valor al objeto dataTransfer.
          se puede acceder a esta info en drop por getData pasandole la clave.*/
    };
    
    const dragEnter = (e,position) => {
      e.preventDefault(); //evitar la acción predeterminada de un evento
    };
    
    const drop = (e,position) => {
      let id = e.dataTransfer.getData("id"); //me manda el valor de la clave id
        let tasks = arrayTasks.filter(task => {
            if (task.id == id) {
                task.status = position;
            }
            return task; 
            /*Sin el return task; al final del cuerpo del filtro, 
             las tareas no serían devueltas y la variable tasks 
             terminaría siendo una matriz vacía.*/
        });
        setArrayTasks(tasks);
        /*
               this.setState({
           ...this.state,
           tasks
       });//aqui interpreto que una forma vieja de actualizar el estado, o bueno, con clases*/
    };
    
    arrayTasks.forEach(t => { //por cada tarea, crea un div en base a la categoria de la tarea?
    obj[t.status].push(
        <div
         onDragStart={(e) => dragStart(e,t.id)}
         key={t.id}
         draggable 
         className="draggable">
            <Task titleTask={t.nameTask}></Task>
        </div>
    )
    });

  return (
    <div className='blockContainer'>
      <div
      onDragOver={(e) => dragEnter(e)}
      onDrop={(e) => drop(e,"ToDo")}
      className="ToDo">
       <h1 className='blockTitle'>To Do</h1>
                    {obj.ToDo}
                    <img className='blockAdd' src={add}></img>
      </div>


      <div
      onDragOver={(e) => dragEnter(e)}
      onDrop={(e) => drop(e,"Done")}
      className="Done">
       <h1 className='blockTitle'>Done</h1>
                    {obj.Done}
                    <img className='blockAdd' src={add}></img>
      </div>
    </div>
  );
  };

  export default AppDragDrop;

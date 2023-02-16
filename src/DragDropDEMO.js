import React, { useState, useRef, useEffect } from 'react';
import './Block.css';
import add from './images/Add To do.png';
import Task from './Task.js';


const AppDragDropDemo = () => {   
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
      dragItem.current = position;
      console.log((`posiicon star ${dragItem.current}`))
      e.dataTransfer.setData("id", position);
      console.log(e.target);
      /*dataTransfer almacena info del evento drag, 
          setData establece una clave y valor al objeto dataTransfer.
          se puede acceder a esta info en drop por getData pasandole la clave.*/
    };
    
    const dragEnter = (e,position) => {
      if(position != undefined)
      {
        dragOverItem.current = position;//1
      }
      console.log((`posiicon enterrr ${dragOverItem.current}`))
      e.preventDefault(); //evitar la acción predeterminada de un evento
    };
    
    const drop = (e,tag) => {
      let id = e.dataTransfer.getData("id"); //me manda el valor de la clave id
        let tasks = arrayTasks.filter(task => {
            if (task.id == id) {
              var copyArrayTasksItems = [...arrayTasks];
                if(task.status == tag)
                {
                    
                    const dragItemContent = copyArrayTasksItems[dragItem.current];//item 1
                    console.log(dragItemContent)
                    copyArrayTasksItems.splice(dragItem.current, 1);//elimino item 1   
                    console.log(copyArrayTasksItems)
                    copyArrayTasksItems.splice(dragOverItem.current, 0, dragItemContent); //2 item 1 3 4 5 6
                    
                    console.log(copyArrayTasksItems) 
                }
                if(task.status != tag)
                {
                    
                    const dragItemContent = copyArrayTasksItems[dragItem.current];//item 1
                    console.log(dragItemContent)
                    copyArrayTasksItems.splice(dragItem.current, 1);//elimino item 1
                    console.log(copyArrayTasksItems)
                    copyArrayTasksItems.splice(dragOverItem.current, 0, dragItemContent); //2 item 1 3 4 5 6*/
                    console.log(copyArrayTasksItems)
                    task.status = tag;
                }
                setArrayTasks(copyArrayTasksItems);
                console.log(copyArrayTasksItems)
            }
            return task; 
            /*Sin el return task; al final del cuerpo del filtro, 
             las tareas no serían devueltas y la variable tasks 
             terminaría siendo una matriz vacía.*/
        });
        
    };
    
    //const [taskId, setTaskId] = useState(null);
    arrayTasks.forEach(t => { //por cada tarea, crea un div en base a la categoria de la tarea?
    obj[t.status].push(
        <div
         onDragStart={(e) => dragStart(e,arrayTasks.findIndex(e => e.id == t.id))}
         onDragOver={(e) => dragEnter(e, arrayTasks.findIndex(e => e.id == t.id))}
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

export default AppDragDropDemo;

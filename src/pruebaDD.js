import React, { useState, useRef, useEffect } from 'react';
import './Block.css';
import add from './images/Add To do.png';
import Task from './Task.js';

const AppDD = (props) => {
  const arrayTasks = [
    {
      id: 0,
      nameTask: "Completar Guion",
      status: "To Do",
    },
    {
      id: 1,
      nameTask: "Grabar video",
      status: "To Do",
    },
    {
      id: 2,
      nameTask: "Editar video",
      status: "To Do",
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
    },
  ];
  const dragItem = useRef(); //arrastar elemento
  const dragOverItem = useRef(); //arrastras sobre elemento
  const [list, setList] = useState(arrayTasks);

  const dragItemBloque = useRef();
  const dragOverItemBloque = useRef();
  var varPrueba;
  const dragStart = (position, bloque) => {
    dragItem.current = position;
    dragItemBloque.current = bloque;
    console.log(dragItemBloque.current);
  };

  const dragEnter = (position, bloque) => {
    dragOverItem.current = position;//1
    dragOverItemBloque.current = bloque;
    console.log(dragOverItemBloque.current);
  };

  const drop = () => {
    console.log(dragItemBloque.current)
    if (dragItemBloque.current === 'Undefined') {
      console.log(dragItemBloque.current);
      console.log(dragOverItemBloque.current);
      console.log("ustedes son diferentes")
    }
    else if (dragItemBloque.current === dragOverItemBloque.current) {
      
      var copyListItems = [...list];
      const dragItemContent = copyListItems[dragItem.current];//item 1
      copyListItems.splice(dragItem.current, 1);//elimino item 1
      copyListItems.splice(dragOverItem.current, 0, dragItemContent); //2 item 1 3 4 5 6
      console.log(copyListItems);
      setList(copyListItems);
    }
  };


  return (
    <div className='blockContainer'>
      <h1 className='blockTitle'>{props.titleBlock}</h1>
      {list.filter((item) => item.status == "To Do" && props.tag == "To Do" || item.status == "Done" && props.tag == "Done").map((item) => (
        <div onDragStart={() => dragStart(item.id, item.status)} onDragEnter={() => dragEnter(item.id, item.status)} onDragEnd={drop}
          key={item.id} draggable>
          <Task titleTask={item.nameTask}></Task>
        </div>
      ))}
      <img className='blockAdd' src={add}></img>
    </div>
  );

};

export default AppDD;
/*{listTodo.map((item, index) => (
        <div onDragStart={() => dragStart(item.id)} onDragEnter={() => dragEnter(item.id)} onDragEnd={drop} key={item.id} draggable>
          <Task titleTask={item.nameTask}></Task>
        </div>
        ))}
    {listDone.map((item, index) => (
        <div onDragStart={() => dragStart(item.id)} onDragEnter={() => dragEnter(item.id)} onDragEnd={drop} key={item.id} draggable>
          <Task titleTask={item.nameTask}></Task>
        </div>
        ))}*/
/*return (
  <div className='blockContainer'>  
  <h1 className='blockTitle'>{props.titleBlock}</h1>
    {list.filter((item) => item.Done).map((item, index) => (
      <div onDragStart={() => dragStart(index)} onDragEnter={() => dragEnter(index)} onDragEnd={drop} key={index} draggable>
        <Task titleTask={item.nameTask}></Task>
      </div>
      ))}
  <img className='blockAdd' src={add}></img>
  </div>
);*/
/*
/*const dragItemContent = copyListItems[dragItem.current];//item 1
const dragOverItemContent = copyListItems[dragOverItem.current]; 
//dragItemContent.status = dragOverItemContent.status;
//setList(copyListItems);
//console.log(copyListItems);*/
/*var muestra2 = listTodo.some(element => element.id === dragOverItem.current)
const element = listDone.find(element => element.id === dragItem.current);
copyListItems.push(element);
setList(copyListItems);*/
/*
//Funciona nitido, el move con el filter. + el if para cuando el tag cambie
if(props.tag == "To Do")
  {
  return (
<div className='blockContainer'>  
    <h1 className='blockTitle'>{props.titleBlock}</h1>
      {list.filter((item) => item.ToDo).map((item, index) => (
        <div onDragStart={() => dragStart(index)} onDragEnter={() => dragEnter(index)} onDragEnd={drop} key={index} draggable>
          <Task titleTask={item.nameTask}></Task>
        </div>
        ))}
    <img className='blockAdd' src={add}></img>
</div>
);
  } 

 {
      list.map((item, index) => (
        <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
          onDragStart={() => dragStart(index)}
          onDragEnter={() => dragEnter(index)}
          onDragEnd={drop}
          key={index}
          draggable>
            {item.nameTask}
        </div>
        ))}
*/
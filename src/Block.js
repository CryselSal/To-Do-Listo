import React, { useState, useRef } from 'react';
import Task from './Task.js';
import './Block.css';
import add from './images/Add To do.png';

const arrayTasks = [
    {
        id:"1",
        nameTask: "Completar Guion vamo a ver si es verdad que tu eres dura Crysel",
        ToDo: "To do"
    },
    {
        id:"2",
        nameTask: "Grabar video vamo a ver si es verdad que tu eres dura Crysel",
        ToDo: "To do"
    },
    {
        id:"3",
        nameTask: "Editar video vamo a ver si es verdad que tu eres dura Crysel",
        ToDo: "To do"
    },
    {
        id:"4",
        nameTask: "Aprobar Tema vamo a ver si es verdad que tu eres dura Crysel",
        Done: "Done"
    }];


function Block(props){
    if(props.tag == "To Do")
    {
        return (
            <div className='blockContainer'>  
                <h1 className='blockTitle'>{props.titleBlock}</h1>
                {arrayTasks
                .filter((arrayTask) => arrayTask.ToDo)
                .map((arrayTask) => (
                <Task key={arrayTask.id} draggable titleTask={arrayTask.nameTask}></Task>
                ))}
                <img className='blockAdd' src={add}></img>
            </div>
        );
    }
    if(props.tag == "Done")
    {
        return(
            <div className='blockContainer'>  
                <h1 className='blockTitle'>{props.titleBlock}</h1>
                {arrayTasks
                .filter((arrayTask) => arrayTask.Done)
                .map((arrayTask) => (
                <Task titleTask={arrayTask.nameTask}></Task>
                ))}
                <img className='blockAdd' src={add}></img>
            </div>
        );
    }
    return(
        <div className='blockContainer'>
            <img className='blockAdd' src={add}></img>
        </div>
    );
}


/*El margin top deberia funcionar sin texto, incluso sin el h1, no entiendo que ocurre*/
export default Block;
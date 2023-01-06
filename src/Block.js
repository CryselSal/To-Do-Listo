import React from 'react';
import Task from './Task.js';
import './Block.css';
import add from './images/Add To do.png';

function Block(props){
    if(props.tag == "To Do")
    {
        return (
            <div className='blockContainer'>  
                <h1 className='blockTitle'>{props.titleBlock}</h1>
                <Task titleTask="Completar Guion"></Task>
                <Task titleTask="Grabar video"></Task>
                <Task titleTask="Editar video"></Task>
                <img className='blockAdd' src={add}></img>
            </div>
        );
    }
    if(props.tag == "Done")
    {
        return(
            <div className='blockContainer'>  
                <h1 className='blockTitle'>{props.titleBlock}</h1>
                <Task titleTask="Aprobar Tema"></Task>
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
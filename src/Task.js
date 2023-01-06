import React from 'react';
import './Task.css';
import comments from './images/Comments.png';

function Task(props){
    return(
        <div className='taskContainer'>
            <div>
                <h4 className='taskText'>{props.titleTask}</h4>
                <img className='taskComment' src={comments}></img>
            </div>
        </div>
    );
}

export default Task;
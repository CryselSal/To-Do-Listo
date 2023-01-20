import React from 'react';
import './App.css';
import Header from './Header.js';
import AppDD from './pruebaDD.js';
import Block from './Block.js';
import 'typeface-quicksand';
import Task from './Task.js';
import img from './images/mountainous-gloomy-sky.jpg';

function App() {
  return (
    <div className="Contenedor">
    <div className="App">
    <div className='appContent'>
    <AppDD tag="To Do"></AppDD>
    <AppDD tag="Done"></AppDD>
    </div>
    </div>
    </div>
  );
}

/* <AppDD></AppDD>
<Header/>
      <div className='appContent'>
        <Block titleBlock="To do" tag="To Do"/>
        <Block titleBlock="Done"  tag="Done"/>
        <Block titleBlock=""  tag=""/>
      </div>
*/
export default App;
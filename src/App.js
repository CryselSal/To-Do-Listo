import React from 'react';
import './App.css';
import Header from './Header.js';
import Block from './Block.js';
import 'typeface-quicksand';
import Task from './Task.js';
import img from './images/mountainous-gloomy-sky.jpg';

function App() {
  return (
    <div className="Contenedor">
    <div className="App">
      <Header/>
      <div className='appContent'>
        <Block titleBlock="To do" tag="To Do"/>
        <Block titleBlock="Done"  tag="Done"/>
        <Block titleBlock=""  tag=""/>
      </div>
    </div>
    </div>
  );
}
export default App;
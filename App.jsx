/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoList from './ToDoList';


function App() {
  return (
    <ToDoList tasks={[ 'Do laundry','Go to gym','Walk dog']}/>
  );
}

export default App;

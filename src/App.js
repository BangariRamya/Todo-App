// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import TodoList from './ToDoList';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

class App extends Component{
  
  render() {
    return(
      <div>
       <TodoList/>
      </div>
    );
  }
}

export default App;

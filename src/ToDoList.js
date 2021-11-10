import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddTodo from './AddTodo';

export default class TodoList extends Component {
state = {
   todos: [
     { Id: '1', Title: 'Push code to github', Status: 'Done' },
     { Id: '2', Title: 'Email to manager', Status: 'Pending' }
   ]
};
deleteToDo = (todo) => {
   const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
   this.setState({
        todos: filteredItems
   });
};


editToDo = (x) => {
   this.setState(state => ({
        todos: state.todos.map(todo => {
          if (todo.Id === x.Id) {
              return {
                    ...todo,
                    Status: todo.Status === "Done" ? "Pending" : "Done"
              };
         } else {
             return todo;
         }
     })
 }));
};

//add a method to handle all the changes on the button click
addToDo = (todo) => {
   this.setState({
       todos: [...this.state.todos, todo]
   });
};

render() {
    return (
         <div>
             <AddTodo onAdd={this.addToDo}></AddTodo>
             <h1 align="center">TodoList </h1>
                <table className="table">
                   <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                       {this.state.todos.map(x => {
                         return (
                              <tr key={x.Id}>
                              <td>{x.Id}</td>
                              <td>{x.Title}</td>
                              <td >{x.Status}</td>
                              <td>
                              <button className="btn btn-primary" onClick={() => this.deleteToDo(x)}>
                                 <span>
                                    <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                 </span>
                              </button> 
                              </td>
                              <td>
                                 <button className="btn btn-primary" onClick={() => this.editToDo(x)}>
                                       <span>
                                          <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                       </span>
                                 </button>
                              </td>
                              <td style={{ color: x.Status === "Done" ? "green" : "red" }}>
                                    {x.Status}
                              </td>
                              </tr>
                          );
                       })}
                    </tbody>
                </table>
          </div> 
      );
   }
}
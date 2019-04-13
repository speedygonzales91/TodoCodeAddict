import React, { Component } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id : uuid(),
    item : '',
    editItem: false,

  }

  handleChange = (event) => {
    this.setState({
      item : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title : this.state.item,
    }

    const updatedItems = [...this.state.items,newItem];

    this.setState(
      {
        items: updatedItems,
        item: '',
        id: uuid(),
        editItem :false
      }
    )
  }

  clearList =() => {
    this.setState({
      items: []
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">App.js</h3>
            <TodoInput item ={this.state.item} handleChange={this.handleChange} handleSubmit ={this.handleSubmit}/>
            <TodoList items = {this.state.items} clearList = {this.clearList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

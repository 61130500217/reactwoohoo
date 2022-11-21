import React,  { Component} from 'react';
import './App.css';
import TodoList from './TodoList.js'
import { FILTER_ACTIVE } from './services/filter';
import {getAll, addToList } from './services/todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filter: FILTER_ACTIVE,
      items: getAll()
    }
  }
  render() {
    let title = 'Things to do';
    return (
      <div className="containner">
       <div className="row">
          <TodoList title={title}
          addNewItem={this.addNew.bind(this)} 
          ChangeFilter={this.changeFilter.bind(this)} {...this.state}/>
       </div>
      </div>
    );
  }

  addNew(text) {
    let updatedList = addToList(
      this.state.items, 
      {text, completed: false})
      this.setState({items: updatedList})
  }

  changeFilter(filter) {
    this.setState({filter});
  }
 
}

export default App;

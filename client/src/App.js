import React,  { useState } from 'react';
import './App.css';
import TodoList from './TodoList.js'

const ITEM_INITIAL_STATE = [
    {
      id: 1 ,
      text: 'learn React',
      completed: false
    },
    {
      id: 2 ,
      text: 'build react app',
      completed: false
    },
  ]
function App() {
  
  let title = 'Things to do';
  const [items] = useState(ITEM_INITIAL_STATE)
  return (
    <div className="containner">
     <div className="row">
        <TodoList title={title} items={items} />
     </div>
    </div>
  );
}

export default App;

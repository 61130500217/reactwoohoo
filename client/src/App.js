import React,  { useState, useCallback } from 'react';
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
  const [items, updateItems] = useState(ITEM_INITIAL_STATE)
  const addNewItem = useCallback(
    text => {
      updateItems( items => {
        const nextId = items.length +1 ;
        const newItem = {
          id: nextId,
          text: text
        }
        return [...items, newItem];
      });
    },
    [updateItems]
  )
  return (
    <div className="containner">
     <div className="row">
        <TodoList title={title} items={items} addNewItem={addNewItem} />
     </div>
    </div>
  );
}

export default App;

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
  ];
  const FILTER_DEFAULT = 'active';

function App() {
  
  let title = 'Things to do';
  const [items, updateItems] = useState(ITEM_INITIAL_STATE)
  const [filter, setFilter] = useState(FILTER_DEFAULT)
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
  const ChangeFilter = useCallback(value => setFilter(value), [setFilter])
  return (
    <div className="containner">
     <div className="row">
        <TodoList title={title} items={items} filter={filter} addNewItem={addNewItem} ChangeFilter={ChangeFilter}/>
     </div>
    </div>
  );
}

export default App;

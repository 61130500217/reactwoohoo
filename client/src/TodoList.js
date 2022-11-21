import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import { applyFilter } from "./services/filter";

const TodoList = (props) => {
  const { title, items,  addNewItem, filter, changeFilter } = props;
  const count = items.length;
  const filterList = applyFilter(items, filter)
  return (
     <div className="todolist">
          <Header title={title} addNewItem={addNewItem} />
               {filterList.length === 0 ? (
                  <ul className="list-unstyled">
                     {filterList.map(
                     item => 
                        <TodoItem key={item.id} data={item} />
                  )} 
                  </ul>
               )
               :
               <p className="alert alert-secondary">
                     No item in the list
                  </p>
               }
                  
            
          
          <Footer {...{count, filter, changeFilter}} />
     </div>
   
  );
}

export default TodoList
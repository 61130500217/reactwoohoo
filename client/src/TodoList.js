import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

const TodoList = (props) => {
  const { items, title, addNewItem, filter, changeFilter } = props;
  const count = items.length;
  const filterList = applyFilter(items, filter)
  return (
     <div className="todolist">
          <Header title={title} addNewItem={addNewItem} />

          <ul className="list-group lit-group-flush">
               {filterList.length === 0 ? (
                  <div className="alert alert-secondary">
                     No item in the list
                  </div>
               ):(
                  filterList.map(
                     item => (
                        <TodoItem key={item.id} data={item} />
                  )
               )
            )}
          </ul>
          <Footer {...{count, filter, changeFilter}} />
     </div>
   
  );
}
function applyFilter (list, filter)  {
   switch(filter) {
      case 'completed':
         return list.filter(item => item.completed === true );
      case 'active':
         return list.filter(item => item.completed !== true);
      default:
         return list;
      }
}
export default TodoList
import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
const TodoList = (props) => {
  const { items, title, addNewItem } = props;
  const count = items.length;
  return (
     <div className="todolist">
          <Header title={title} addNewItem={addNewItem} />

          <ul className="list-group lit-group-flush">
               {items.map(item => (
                  <TodoItem key={item.id} data={item} />  
               ))}
          </ul>
          <Footer count={count} />
     </div>
   
  );
};
export default TodoList
import './App.css';
import TodoList from './TodoList.js'

function App() {
  let items = [
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
  let title = 'Things to do';
  return (
    <div className="containner">
     <div className="row">
        <TodoList title={title} items={items} />
     </div>
    </div>
  );
}

export default App;

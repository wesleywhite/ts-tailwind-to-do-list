import React from 'react';
import './App.css';
import {ToDoItemType} from './types'
import ToDo from './ToDo';
import Stats from './Stats'

function App() {
  const [toDoItems, setToDoItems] = React.useState<ToDoItemType[]>([])

  return (
    <div className='bg-gray-700 w-screen h-screen flex flex-col justify-center items-center' >
      <ToDo toDoItems={toDoItems} setToDoItems={setToDoItems}/>
      <Stats toDoItems={toDoItems}/>
    </div>
  );
}

export default App;

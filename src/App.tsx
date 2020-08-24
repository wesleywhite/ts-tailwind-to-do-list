import React from 'react';
import './App.css';
import {ToDoItemType} from './types'
import ToDo from './ToDo';
import Stats from './Stats'

function App() {
  const [toDoItems, setToDoItems] = React.useState<ToDoItemType[]>([])
  const [darkMode, setDarkMode] = React.useState<boolean>(false)

  return (
    <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-screen h-screen flex flex-col justify-center items-center`} >
      <div className="absolute top-0 right-0 m-2 flex flex-col">
        <label className="switch">
          <input type="checkbox" onClick={()=>setDarkMode(!darkMode)}/>
          <span className="slider round"></span>
        </label>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </div>
      <ToDo toDoItems={toDoItems} setToDoItems={setToDoItems} darkMode={darkMode}/>
      <Stats toDoItems={toDoItems}/>
    </div>
  );
}

export default App;

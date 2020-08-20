import React from 'react';
import './App.css';
import ToDo from './ToDo';
import Stats from './Stats'

function App() {
  return (
    <div className='bg-gray-200 w-screen h-screen flex flex-col justify-center items-center' >
      <ToDo/>
      <Stats/>
    </div>
  );
}

export default App;

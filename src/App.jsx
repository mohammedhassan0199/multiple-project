import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Digital from './pages/Digital';
import Greeting from './pages/Greeting';
import Calculator from './pages/Calculator';
import ToDoList from './pages/ToDoList';
import DictionaryApp from './pages/DictionaryApp';
import Toggle from './Toggle';



function App() {

  const[background,setBackground] = useState("light-mode");

  const changeMode = () => {
    if(background === "light-mode"){
      setBackground("dark-mode")
      setBackground("buttons")
    }
    else{
      setBackground("light-mode")
    }
  }

  useEffect(() => {
      document.querySelector("body").className = background;
  },[background])
  return (
    <BrowserRouter>

      <nav className='py-6 px-12 bg-[#581845]  text-white'>
        <ul className='flex justify-between text-2xl'>
          <li><Link to="/">Digital Clock</Link></li>
          <li><Link to="/greeting">Greeting App</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/todolist">Todo List</Link></li>
          <li><Link to="/dictionary">Dictionary</Link></li>
          <li><Link to="toggle">Toggle</Link></li>
          
          <div className='icon' onClick={changeMode}>{background == "light-mode" ? <i className='fa-solid fa-sun'></i> : <i className='fa-solid fa-moon'></i>}</div>


          
        </ul>
      </nav>

      <Routes>
  <Route path="/" element={<Digital />} />
  <Route path="/greeting" element={<Greeting />} />
  <Route path="/calculator" element={<Calculator />} />
  <Route path="/todolist" element={<ToDoList />} />
  <Route path="/dictionary" element={<DictionaryApp />} />
  <Route path='/toggle' element={<Toggle/>}/>



</Routes>
    </BrowserRouter>
  );
}

export default App;

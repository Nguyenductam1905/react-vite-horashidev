import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
const App = () => {
  const horashiDev = "DucTam HorashiDev";
  const age = 25;
  const data = {
    address: "HaNoi",
    country: "VietNam"
  }
  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }
  return (
    <>
        <div className="todo-container">
          <div className='todo-title'>Todo List</div>
          <TodoNew
           addNewTodo = {addNewTodo}
          />
          <TodoData
            name = {horashiDev}
            age = {age}
            data = {data}
          />
          <div className="todo-image">
            <img src={reactLogo} alt="" />
          </div>
        </div>
    </>
  )
}

export default App

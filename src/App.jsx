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
  // const addNewTodo = (name) => {
  //   alert(`call me ${name}`)
  // }
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Leaning React" },
    // { id: 2, name: "Watching Youtube" }
  ])
  const addNewTodo = (name) => {
    const newTodo = {
      id:randomIntFromInterval(3, 1000),
      name:name
    }
    setTodoList([...todoList, newTodo])
  }
  const deleteTasks = (taskDelete) => {
    setTodoList(todoList.filter((list) => list.id !== taskDelete))
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
        <div className="todo-container">
          <div className='todo-title'>Todo List</div>
          <TodoNew
           addNewTodo = {addNewTodo}
          />
          {/* {
            todoList.length > 0 &&
            <TodoData
            // name = {horashiDev}
            // age = {age}
            // data = {data}
            todoList = {todoList}
          />
          }
          {todoList.length === 0 &&
            <div className="todo-image">
              <img src={reactLogo} alt="" />
            </div>
          } */}
          {
            todoList.length > 0 ?
            <TodoData
            // name = {horashiDev}
            // age = {age}
            // data = {data}
            todoList = {todoList}
            deleteTasks = {deleteTasks}
          />
          :
          <div className="todo-image">
              <img src={reactLogo} alt="" />
            </div>
          }
        </div>
    </>
  )
}

export default App

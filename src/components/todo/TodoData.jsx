import './todo.css'

const TodoData = (props) => {
    const {name, age, data, todoList} = props
    console.log(">>>Check props", props)
    console.log(">>>Check list", todoList)

    return (
        <div className="todo-data">
          {todoList.map((item, index) => {
            console.log(item, index);
            return (
                  <div key={item.id} className={`todo-item ${index}`} >
                    <div>{item.name}</div>
                    <button>Delete</button>
                  </div>)
          })}
          {/* {JSON.stringify(props.todoList)} */}
      </div>
    )
}

export default TodoData
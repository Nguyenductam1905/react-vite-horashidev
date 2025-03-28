const TodoData = (props) => {
    const {name, age, data} = props
    console.log(">>>Check props", props)
    return (
        <div className="todo-data">
        <div>My name is {name}</div>
        <div>Leaning React</div>
        <div>Watching Youtube</div>
        {JSON.stringify(props.todoList)}
      </div>
    )
}

export default TodoData
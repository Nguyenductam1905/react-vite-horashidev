const TodoNew = (props) => {
    const {addNewTodo} = props
    addNewTodo("HorashiDev")
    const handleClick = () => {
      alert("Clicked")
    }
    return (
      <div className='todo-new'>
        <input type="text" />
        <button onClick={handleClick} style={{cursor : 'pointer'}}>Add</button>
      </div>
    )
}

export default TodoNew
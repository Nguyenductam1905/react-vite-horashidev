import { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;
  const [valueInput, setValueInput] = useState("Horashi");
  // addNewTodo("HorashiDev")
  const handleClick = (prop) => {
    addNewTodo(valueInput)
    console.log(`Add ${prop}`);
    setValueInput("")
  }
  const handleOnChange = (e) => {
    setValueInput(e)
    
    console.log(">>> handleOnChange", e);
  }
  return (
    <div className='todo-new'>
      <input type="text"
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
        value={valueInput}
      />
      <button onClick={() => handleClick(valueInput)} style={{ cursor: 'pointer' }}>Add</button>
      <div>my input is = {valueInput}</div>
    </div>
  )
}

export default TodoNew
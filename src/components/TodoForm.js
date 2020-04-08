import React, { useState } from "react";

const TodoForm = ({ dispatch, state }) => {
  const [newChore, setNewChore] = useState("");

  const handleChanges = e => {
    setNewChore(e.target.value);
  };
 const clearChore = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_ITEM", payload: state.todoList.completed });
  };

  const submitChore = e => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: newChore });
  };

 
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="form">
    <form onSubmit={handleSubmit} className='input'>
      <input
        type="text"
        name="newTodo"
        value={newChore}
        onChange={handleChanges}
      />
      <button type="submit" onClick={submitChore}>
        Add Item 
      </button>
      <button type="submit" onClick={clearChore}>
        Clear Completed
      </button>
    </form>
    </div>
  );
};

export default TodoForm;

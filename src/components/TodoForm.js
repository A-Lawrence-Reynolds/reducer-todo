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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newTodo"
        value={newChore}
        onChange={handleChanges}
      />
      <button type="submit" onClick={submitChore}>
        Add Chore
      </button>
      <button type="submit" onClick={clearChore}>
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;

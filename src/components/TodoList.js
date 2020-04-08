import React from "react";
import "../App.css";

const TodoList = ({ dispatch, state }) => {
  console.log(state);
  return (
    <div>
      {state.todoList.map(item => (
        <div
          key={item.id}
          className={`${item.completed ? " completed" : ""} list` }
          onClick={() => dispatch({ type: "TOGGLE_ITEM", payload: item.id })}
          

          
        >
          <p>{item.item}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

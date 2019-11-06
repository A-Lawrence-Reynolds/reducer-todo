import React, { useReducer } from "react";
import { appReducer } from "../reducers/reducer";
import Todo from "./Todo";

const TodoList = ({ dispatch, state }) => {
  return (
    <div>
      {state.todo.map(item => {
        <div
          key={item.id}
          className={`${item.completed ? "completed" : ""}`}
          item={item}
          onClick={() => dispatch({ type: "TOGGLE_CHORE", payload: item.id })}
        />;
      })}
      <p>{item.item}</p>
    </div>
  );
};
export default TodoList;

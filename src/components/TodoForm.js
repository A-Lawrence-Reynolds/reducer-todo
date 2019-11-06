import React, { useReducer, useState } from "react";
import Todo from "./Todo";
import { appReducer, intState } from "../reducers/reducer";

const TodoForm = () => {
  const [{ data }, dispatch] = useReducer(appReducer, intState);
  const [todo, setTodo] = useState({
    item: "",
    completed: false,
    id: new Date()
  });
  const handleChanges = e => {
    setNewTodo({ ...todo, item: e.target.value });
  };
  const submitItem = e => {
    e.preventDefault();
    props.addItem(state.item);
  };
  onChange = { handleChanges };
  return (
    <form>
      <input type="text" value={todo} name="item" />
      <button>Add</button>
    </form>
  );
};
export default TodoForm;

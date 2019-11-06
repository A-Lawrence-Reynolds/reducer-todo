import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, reducer } from "./reducers/reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoForm dispatch={dispatch} state={state} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;

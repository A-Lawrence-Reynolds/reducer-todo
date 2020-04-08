import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, reducer } from "./reducers/reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div className="todoform">
      <TodoForm dispatch={dispatch} state={state} />
      </div>
      <div className="todolist">
       <TodoList state={state} dispatch={dispatch} /> 
      </div>
      
    </div>
  );
}

export default App;

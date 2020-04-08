

export const initialState = {
  todoList: [
    {
      item: "getting back into reduce!",
      completed: false,
      id: Date.now()
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {case "TOGGLE_ITEM":
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    case "ADD_ITEM":
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todoList: [...state.todoList, newItem]
      };
    

    case "CLEAR_ITEM":
      return {
        ...state,
        todoList: state.todoList.filter(item => !item.completed)
      };

    default:
      return state;
  }
};

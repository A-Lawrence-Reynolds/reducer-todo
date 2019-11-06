import React from "react";

export const intState = {
  data: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const appReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

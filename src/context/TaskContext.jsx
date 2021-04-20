import React, { createContext, useReducer } from "react";
import dummy from "../dummy";
import id from "uuid/v4";

const ADD_TASK = "ADD_TASK";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const DELETE_TASK = "DELETE_TASK";

export const TaskContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      if (action.payload.title !== "") return [action.payload, ...state];
    case TOGGLE_COMPLETE:
      return state.map((task) => {
        if (task.id !== action.payload.id) return task;
        return { ...task, completed: !task.completed };
      });
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, dummy);

  const addTask = (title) => {
    dispatch({
      type: ADD_TASK,
      payload: {
        id: id(),
        title,
        completed: false,
      },
    });
  };

  const toggleComplete = (id) => {
    dispatch({ type: TOGGLE_COMPLETE, payload: { id } });
  };

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: { id } });
  };

  const value = { tasks, addTask, toggleComplete, deleteTask };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

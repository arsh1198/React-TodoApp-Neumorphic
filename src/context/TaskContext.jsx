import React, { createContext, useEffect, useReducer } from "react";

import firebase, { firestore } from "../firebase";

const SET_TASKS = "SET_TASKS";
const ERROR = "ERROR";

export const TaskContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        tasks: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  tasks: [],
  loading: true,
  error: null,
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const tasksSnapshot = firestore.collection("tasks");
    const unsubscribe = tasksSnapshot
      .orderBy("created", "desc")
      .onSnapshot((snapshot) => {
        const tasks = snapshot.docs.map(
          (doc) => {
            return { id: doc.id, ...doc.data() };
          },
          (error) => {
            dispatch({ type: ERROR, payload: error.message });
          }
        );
        dispatch({ type: SET_TASKS, payload: tasks });
      });
    return () => unsubscribe();
  }, [dispatch]);

  const addTask = async (title) => {
    try {
      const tasksRef = firestore.collection("tasks");
      await tasksRef.add({
        created: firebase.firestore.Timestamp.now(),
        title,
        completed: false,
      });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

  const toggleComplete = async ({ id, completed }) => {
    try {
      await firestore.collection("tasks").doc(id).update({
        completed: !completed,
      });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

  const deleteTask = async ({ id }) => {
    try {
      await firestore.collection("tasks").doc(id).delete();
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

  const value = {
    tasks: state.tasks,
    loading: state.loading,
    error: state.error,
    addTask,
    toggleComplete,
    deleteTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

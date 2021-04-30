import React, { useContext } from "react";

import "./TasksList.css";
import Task from "../Task/Task";
import { TaskContext } from "../../context/TaskContext";
import NoTask from "../NoTask/NoTask";
import { AnimatePresence, motion } from "framer-motion";
import { ProgressCircular } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

const transition = {
  type: "spring",
};

const variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const TasksList = ({ style }) => {
  const { tasks, loading } = useContext(TaskContext);
  return (
    <motion.div
      className="list-tasks"
      style={{ ...style }}
      animate={{
        transition: {
          staggerChildren: 0.5,
        },
      }}
    >
      <AnimatePresence>
        {loading && (
          <center>
            <ProgressCircular style={{ marginTop: "18px" }} indeterminate />
          </center>
        )}

        {tasks.length > 0
          ? tasks.map((task, index) => {
              return (
                <motion.div
                  transition={transition}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  layout
                  key={task.id}
                  custom={index}
                >
                  <Task key={task.id} task={task} />
                </motion.div>
              );
            })
          : !loading && (
              <motion.div
                transition={transition}
                variants={variants}
                initial="initial"
                animate="animate"
                layout
                exit="exit"
              >
                <NoTask />
              </motion.div>
            )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TasksList;

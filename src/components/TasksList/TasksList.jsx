import React, { useContext } from "react";

import "./TasksList.css";
import Task from "../Task/Task";
import { TaskContext } from "../../context/TaskContext";
import NoTask from "../NoTask/NoTask";
import { AnimatePresence, motion } from "framer-motion";

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
  const { tasks } = useContext(TaskContext);
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
        {tasks.length < 1 ? (
          <motion.div
            transition={transition}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <NoTask />
          </motion.div>
        ) : (
          tasks.map((task, index) => {
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
                <Task task={task} />
              </motion.div>
            );
          })
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TasksList;

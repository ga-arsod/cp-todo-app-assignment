import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { HeaderContext } from "../../Contexts/headerContext";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  const {tasks, setTasks} = useContext(HeaderContext);
  // sample values to be replaced
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    console.log("changed")
    setCurrent(tasks.filter((ele) => {
      return ele.done === false;
    }))
  },[tasks]);

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <p>You have <b data-testid="header-remaining-task">{current.length}</b> of <b data-testid="header-total-task">{tasks.length}</b> tasks remaining
      </p>
    </div>
  );
};

export default TaskHeader;

import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import { useContext } from "react";
import { HeaderContext } from "../../Contexts/headerContext";

const Tasks = () => {
  const {tasks, setTasks} = useContext(HeaderContext);

  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {tasks.map((ele) => {
          return <Task key={ele.id} data={ele} />
        })}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;

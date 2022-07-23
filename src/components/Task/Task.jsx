import React from "react";
import { useContext } from "react";
import { HeaderContext } from "../../Contexts/headerContext";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({data}) => {
  const { handleChange, setTasks, tasks} = useContext(HeaderContext);

  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>

      <input checked={data.done ? true : false}
        onChange={(el) => handleChange(data.id, el.target.checked, "done")}
        type="checkbox" data-testid="task-checkbox" />

      <div data-testid="task-text">{data.text}</div>

      {/* Counter here */}
      <Counter data={data} />

      <button data-testid="task-remove-button" onClick={() => {
        setTasks(tasks.filter(ele => ele.id !== data.id));
      }}>X</button>
    </li>
  );
};

export default Task;

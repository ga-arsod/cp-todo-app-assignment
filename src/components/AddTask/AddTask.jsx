import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [text, setText] = useState("");

  const handleChange = (ele) => {
    setText(ele.target.value);
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={handleChange}/>
      <button data-testid="add-task-button" onClick={() => {
        
      }}>Add</button>
    </div>
  );
};

export default AddTask;

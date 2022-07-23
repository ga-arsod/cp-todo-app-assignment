import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { HeaderContext } from "../../Contexts/headerContext";
import styles from "./addTask.module.css";

const AddTask = () => {
  const {tasks, setTasks} = useContext(HeaderContext);
  
  // NOTE: do not delete `data-testid` key value pair
  const [text, setText] = useState({
    id: "",
    text : "",
    done : false,
    count : 1
  });

  const textHandleChange = (ele) => {
    setText({...text, text: ele.target.value, id: tasks.length + 1});
  }
  return (
    <div className={styles.todoForm}>
      <input value={text.text} data-testid="add-task-input" type="text" onChange={textHandleChange}/>

      <button disabled={text.text.length <= 0 ? true : false}  disdata-testid="add-task-button" onClick={() => {
        setTasks(ele => [...ele, text])
      }}>Add</button>
    </div>
  );
};

export default AddTask;

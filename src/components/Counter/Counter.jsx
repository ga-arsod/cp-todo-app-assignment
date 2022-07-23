import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { HeaderContext } from "../../Contexts/headerContext";
import styles from "./counter.module.css";

const Counter = ({data}) => {
  // sample value to be replaced
  
  const {handleChange} = useContext(HeaderContext);
  
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button 
      disabled={data.count == 0? true : false} data-testid="task-counter-increment-button" onClick={() => {
        handleChange(data.id, data.count-1, "count");
      }}>-</button>
      <span data-testid="task-counter-value">{data.count}</span>
      <button data-testid="task-counter-decrement-button" onClick={() => {
        handleChange(data.id, data.count+1, "count");
      }}>+</button>
    </div>
  );
};

export default Counter;

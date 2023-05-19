import React from "react";
import "./todo-item.css";

export function TodoItem(props) {
  
  const markDone = () => {
    props.taskDone(props.item);
  };
  
  return (
    <div className="todo-item">
      <p
        onClick={markDone}
        style={{ textDecoration: props.item.done ? "line-through" : "none" }}
      >
        {props.item.text}
      </p>
    </div>
  );
}

import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  const elements = props.listItems.map((item, index) => (
    <TodoItem key={index} item={item} taskDone={props.taskDone}></TodoItem>
  ));

  return <div>{elements}</div>;
};

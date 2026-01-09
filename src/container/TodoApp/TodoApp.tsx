"use client";

import {} from "@reduxjs/toolkit";
import { ChangeEvent, useState } from "react";

interface todoType {
  id: number;
  todo: string;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<todoType[]>([]);
  const [task, setTask] = useState("");
  console.log(todos);
  const handleTask = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("in the handleTask");
    setTask(e.target.value);
    console.log(task);
  };

  const handleAddTask = (task: string) => {
    const id = "id";
    setTodos((prev) => [...prev, task]);
    console.log(todos);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        This is my to do app
      </div>
      <input
        placeholder="Type a task here.."
        onChange={(e) => handleTask(e)}
        className="w-full p-6 text-2xl border border-gray-50"
      />
      <button onClick={() => handleAddTask(task)}>Add task</button>
      {todos.map((todo) => {
        return <div key={todo}></div>;
      })}
    </>
  );
};

export default TodoApp;

"use client";

import { useState } from "react";

interface Todo {
  id: string;
  text: string;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputValue,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEditChange = (id: string, value: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: value } : todo))
    );
  };

  // we can do this as well

  //   1️⃣ Add completed / checkbox (cleanly)
  // 2️⃣ Add localStorage persistence

  return (
    <>
      <h2>This is my Todo App</h2>

      <input
        value={inputValue}
        placeholder="Type a task..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          {editingId === todo.id ? (
            <input
              value={todo.text}
              onChange={(e) => handleEditChange(todo.id, e.target.value)}
            />
          ) : (
            <span>{todo.text}</span>
          )}

          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button
            onClick={() => setEditingId(editingId === todo.id ? null : todo.id)}
          >
            {editingId === todo.id ? "Save" : "Edit"}
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoApp;

import { useState, useEffect } from "react";

export const useTodos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });
  const [editId, setEditId] = useState(null);

   

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = () => {
    if (!text.trim()) return;
    if (editId !== null) {
      const updated = todos.map((todo) =>
        todo.id === editId ? { ...todo, text: text } : todo,
      );
      setTodos(updated);
      setEditId(null);
      setText("");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    if (id === editId) {
      setEditId(null);
      setText("");
    }
  };

  const startEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  const cancelEdit = () => {
    setText("");
    setEditId(null);
  };

  return {
    todos,
    text,
    editId,
    setText,
    handleSubmit,
    deleteTodo,
    startEdit,
    cancelEdit,
  };
};

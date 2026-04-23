//  import React from "react";
import { useTodos } from "./hooks/useTodos";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const {
    todos,
    text,
    editId,
    setText,
    handleSubmit,
    deleteTodo,
    startEdit,
    cancelEdit,
  } = useTodos();

   return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        <TodoInput
          text={text}
          setText={setText}
          handleSubmit={handleSubmit}
          editId={editId}
          cancelEdit={cancelEdit}
        />

        <TodoList
          todos={todos}
          onEdit={startEdit}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}
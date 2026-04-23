// import React from 'react'

export default function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <div>
      <li className="flex justify-between items-center border p-2 mb-2">
      <span>{todo.text}</span>
        <div className="flex gap-2">
        <button onClick={() => onEdit(todo)} className="text-blue-500">✏️</button>
        <button onClick={() => onDelete(todo.id)} className="text-red-500">❌</button>
      </div>
    </li>
    </div>
  )
}

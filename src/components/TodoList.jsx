// import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onEdit, onDelete }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
            <TodoItem 
             key={todo.id}
             todo={todo}
             onEdit={onEdit}
             onDelete={onDelete}
            />
        ))}
      </ul>
    </div>
  )
}

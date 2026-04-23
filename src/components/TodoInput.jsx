// import React from 'react'
// import {text, setText} from "../hooks/useTodos"
export default function TodoInput({ text, setText, handleSubmit, editId, cancelEdit }) {
  return (
    <div>
      <div className='flex gap-2 mb-4'>
         <input
          className="border p-2 flex-1 rounded-2xl"
          value={text}
          placeholder="Enter todo..."
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className={`px-4 text-white rounded-2xl ${
            editId !== null ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>
       {editId !== null && (
        <button
          onClick={cancelEdit}
          className="text-sm text-gray-500 mb-3"
        >
          Cancel Edit
        </button>
      )}
    </div>
  )
}

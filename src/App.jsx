
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(()=>{
    try{
    const stored = JSON.parse(localStorage.getItem("todos"));
    if(stored) setTodos(stored);
    } catch (error){
      console.error("Invalid localStroage data");
      setTodos([]);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Todo and edit 
  const handleSubmit = () => {
    if(!text.trim()) return;

    if(editId !== null){
      const updated = todos.map((todo) => 
        todo.id === editId ? {...todo, text: text } : todo
      );
      setTodos(updated);
      setEditId(null);
      setText("");
      return
    }

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !==id));
    
    if(id === editId){
      setEditId(null);
      setText("");
    }
  };

  const startEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  }

  const cancelEdit =()=> {
    setText("");
    setEditId(null);
  }

  return (
   <>
  <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
  <div className='bg-white p-6 rounded shadow w-96'>
    <h1 className='text-2xl font-bold mb-4 text-center'>Todo App</h1>
    <div className='flex gap-2 mb-4'>
      <input 
      className='border p-2 flex-1 rounded-2xl'
       value={text}
       placeholder='Enter todo...'
       onChange={(e) => setText(e.target.value)}
      />
      <button 
      disabled={!text.trim()}
      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      className={`px-4 text-white rounded-2xl ${editId !== null ? "bg-green-500" : "bg-blue-500"} ${!text.trim() && "opacity-50 cursor-not-allowed"}`}
      onClick={handleSubmit}
       >
        {editId !==null ? "Update" : "Add"}
      </button>
    </div>

    {editId !== null && (
      <button onClick={cancelEdit}
      className='text-lg text-gray-500 mb-3 border px-4 rounded-2xl'>Cancel Edit</button>
    )}


    {/* Todo List */}

    <ul>
      {todos.map((todo) => (
        <li key={todo.id}
        className='flex justify-between items-center border p-2 mb-2'>
           <span>{todo.text}</span>
           <div className='flex gap-2'>
            <button className='text-blue-500' onClick={() => startEdit(todo)}>✏️</button>
             <button className='text-red-500' onClick={() => deleteTodo(todo.id)}>❌</button>
             </div>
             </li>
      ))}
    </ul>
  </div>
  </div>
   </>
  )
}

export default App

import {useState} from "react"

export default function App() {
  const [newTodo, setNewTodo] = useState("")
  const[todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if (newTodo ==="") return

    setTodos(current => [
      ...current,
      {id: crypto.randomUUID(), title: newTodo, completed: false}
    ])

    setNewTodo("")
  }

  function toggleTodo(id, completed) {
    setTodos(current =>
      current.map(todo => {
        if (todo.id === id) {
          return{...todo, completed}
        }
        return todo
      })
    )
  }

  function deleteTodo(id) {
    setTodos(current => current.filter(todo => todo.id !== id))
  }
  return (
    <>
      <h1>TodoList</h1>
     <form onSubmit={handleSubmit}>
      <input
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        type="text"
      />
      <button>Add</button>
     </form>

     <ul>
      {todos.map(todo =>(
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e =>
                toggleTodo(todo.id, e.target.checked)  
              }
            />
            {todo.title}  
          </label>
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>

        </li>
      ))}
     </ul>
    </> 
  )
}
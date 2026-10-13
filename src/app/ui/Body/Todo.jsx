import {useState} from 'react'

const TodoItem = ({isComplete, onDelete, title, id, handleComplete}) => {
  return(
    <div id={id} className="flex border my-2 rounded-2xl py-2 px-3 justify-between items-center">
      <input checked={isComplete} onChange={() => handleComplete(id)} type='checkbox' className='size-5.5 cursor-pointer'/>
      <p>{title}</p>
      <button onClick={onDelete} className='bg-red-700 text-white p-2 rounded-2xl hover:opacity-75'>
        Delete Todo
      </button>
    </div>
  )
}

const todoArr = [
  {id: 1, title: 'assadasdasd', isComplete: false},
  {id: 2, title: 'adasdasd', isComplete: false},
]

export const TodoList = () => {
  const [todos, setTodos] = useState(todoArr)
  const [todoTitle, setTodoTitle] = useState('')

  const toggleComplete1 = (id) => {
    setTodos(prev => ({
      ...prev, 
      isComplete: !isComplete
    }))
  }

  const toggleComplete = (id) => {
    //setTodos([...prev, {}, {}, {}] => ? )
    setTodos(prev => prev.map(todo => (todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo) ))
  }

  const handleRemove = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const handleAddTodo = () => {
    setTodos(prev => [...prev, {id: Date.now(), title: todoTitle, isComplete: false}])
  }

  const handleChangeTodoTitle = (e) => {
    setTodoTitle(e.target.value)
  }

    return(
        <div className='w-1/2'>
          <h3>Todo List</h3>
          <div className='flex items-center justify-around'>
            <input className='border py-1.5 px-3' value={todoTitle} onChange={handleChangeTodoTitle}/>
            <button onClick={handleAddTodo} className='bg-blue-500 text-white p-2 rounded-2xl hover:opacity-75'>
              Add Todo
            </button>
          </div>
          {
            todos?.map(todo => (
              <div key={todo.id}>
                <TodoItem 
                  id={todo.id}
                  title={todo.title}
                  onDelete={() => handleRemove(todo.id)}
                  isComplete={todo.isComplete}
                  handleComplete={(id) => toggleComplete(todo.id)}
                />
              </div>
            ))
          }
        </div>
    )
}
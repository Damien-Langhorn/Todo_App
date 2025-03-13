import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState, useEffect} from 'react'

function App() {
   /* const todos = [
      {input: 'Hello! Add your first task.', complete: true},
      {input: 'Click on the checkbox to complete a task.', complete: false},
      {input: 'Click on the trash icon to delete a task.', complete: false},
      {input: 'Click on the pencil icon to edit a task.', complete: true},
    ]*/



  const [todos, setTodos] = useState([
    {input: 'Hello! Add your first task.', complete: true},
  ])
  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, { input: newTodo, complete: false}] 
    setTodos(newTodoList) 
    handleSavedData(newTodoList)
  }

  function handleCompleteTodo(index){
    let newTodos = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodos[index] = completedTodo
    setTodos(newTodos)
    handleSavedData(newTodos)
  }

  function handleDeleteTodo(index){
    let newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodos)
    handleSavedData(newTodos)
  }

  function handleSavedData(currentTodos){ 
    localStorage.setItem('todo-app', JSON.stringify({todos: currentTodos}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')){
      return
    }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])


  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App

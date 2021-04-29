const { Router } = require('express')
const { nanoid } = require('nanoid')
const router = new Router()
const {
  getTodos,
  addTodo,
  removeTodo
} = require('../db/db-operations.js')

router.post('/', (req, res) => {
  const todoItem = req.body
  todoItem.id = nanoid()
  console.log('Add todo:', todoItem)
  const todos = addTodo(todoItem)
  console.log(todos)
  let result = {}

  result.success = true
  result.todos = todos
  res.json(result)
})

router.get('/', (req, res) => {
  const todos = getTodos()
  let result = {}

  if (todos.length > 0) {
    result.success = true
    result.todos = todos
  } else {
    result.success = false
    result.message = 'No todos'
  }
  res.json(result)
})

router.delete('/:id', (req, res) => {
  const todoId = req.params.id
  const removedTodo = removeTodo(todoId)
  console.log('Deleted:', removedTodo)
  let result = {}

  if (removedTodo.length > 0) {
    result.success = true
  } else {
    result.success = false
    result.message = 'No todo'
  }
  res.json(result)
})

module.exports = router

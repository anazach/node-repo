const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('todos.json')
const db = lowdb(adapter)

function initiateDatabase() {
  db.defaults({ todos: [] }).write()
}

function getTodos() {
  return db.get('todos').value()
}

function addTodo(todoItem) {
  return db.get('todos').push(todoItem).write()
}

function removeTodo(todoId) {
  return db.get('todos').remove({ id: todoId }).write()
}

exports.initiateDatabase = initiateDatabase
exports.getTodos = getTodos
exports.addTodo = addTodo
exports.removeTodo = removeTodo

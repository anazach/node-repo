const express = require('express')
const todoRouter = require('./routes/index')
const { initiateDatabase } = require('./db/db-operations')
const app = express()

app.use(express.json())
app.use('/api/todo', todoRouter)

app.listen(8888, () => {
  console.log('Server started')
  initiateDatabase()
})

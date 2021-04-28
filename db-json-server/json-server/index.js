const express = require('express');
const cors = require('cors');
const lowDb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const bodyParser = require('body-parser');
const { nanoid } = require('nanoid');
const db = lowDb(new FileSync('db.json'))
const app = express()

db.defaults({ notes: [] }).write()
app.use(cors())
app.use(bodyParser.json())
const PORT = 4444;

app.get('/notes', (req, res) => {
 const data = db.get('notes').value()
 return res.json(data)
})

app.post('/notes/new', (req, res) => {
 const note = req.body
 db.get('notes').push({
  ...note, id: nanoid()
 }).write()
 res.json({ success: true })
})

app.listen(PORT, () => {
 console.log('Server 4444')
})


//console: $ curl --header "Content-Type: application/json"  --request POST --data '{ "test": "Hello express js"}' http://localhost:4444/notes/new

//Check GET: $ curl http://localhost:4444/notes/new
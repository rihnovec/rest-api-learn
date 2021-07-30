const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()

const CONTACTS = [
  {
    id: v4(),
    name: 'Антон',
    value: '+7(914)-590-70-51',
    marked: false
  }
]

app.use(express.json())

app.get('/api/contacts', (request, response) => {
  response.status(200).json(CONTACTS)
})

app.post('/api/contacts', (request, response) => {
  const contact = {...request.body, id: v4(), marked: false}
  CONTACTS.push(contact)
  response.status(201).json(contact)
})

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => {
  console.log('server has been started on port 3000...')
})

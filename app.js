const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()

let CONTACTS = [
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

app.delete('/api/contacts/:id', (request, response) => {
  CONTACTS = CONTACTS.filter(c => c.id !== request.params.id)
  response.status(200).json({message: 'Контакт был удален'})
})

app.put('/api/contacts/:id', (request, response) => {
  const idx = CONTACTS.findIndex(c => c.id === request.params.id)

  CONTACTS[idx] = request.body
  response.json(CONTACTS[idx])
})

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => {
  console.log('server has been started on port 3000...')
})

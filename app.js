const express = require('express')
const path = require('path')
const app = express()



app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => {
  console.log('server has been started on port 3000...')
})

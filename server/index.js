const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive')
      controller = require('./controller')
      require('dotenv').config()

    const app = express()
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

app.get('/api/inventory', controller.getAll)
app.post('/api/addproduct', controller.addProduct)
// app.delete('/api/products/:id',controller.deleteProduct)
// app.put('/api/products/:id',controller.editProduct)

const port = 4000
app.listen(port, () => console.log(`server is listening on port ${port}`))
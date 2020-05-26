const { Router } = require('express')

const authControll = require('./controllers/authControll')

const app = new Router();

app.post('/register', authControll.store)
app.get('/user', authControll.index)
app.put('/user/:id', authControll.update)
app.delete('/user/:id', authControll.delete)

module.exports = app
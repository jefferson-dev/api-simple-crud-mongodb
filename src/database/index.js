const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27019/noderest', 
{ useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })

module.exports = mongoose
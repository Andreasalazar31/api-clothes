const express = require('express')
const clothes_routes = require('./routes/clothes')

const app = express()

// settings
app.set('port', process.env.PORT || 4000)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/clothes', clothes_routes)

module.exports = app
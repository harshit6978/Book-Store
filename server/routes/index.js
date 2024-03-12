const userRoute = require('./user.route');
const bookRoute = require('./book.route')
const authRoute = require('./auth.route')
const express = require('express');
const routes = express.Router()




routes.use('/book', bookRoute);
routes.use('/auth', authRoute)

module.exports = routes;
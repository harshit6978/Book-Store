const express = require('express');
const { authController } = require('../controller');
const route = express.Router();




route.post('/post', authController.authPost)
route.get('/get', authController.authGet)
// route.get("/get",bookController.getBook)
// route.delete("/deleteBook/:id",bookController.deleteBook)



module.exports = route; 
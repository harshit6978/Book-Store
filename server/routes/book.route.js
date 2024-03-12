const express = require('express');
const { bookController } = require('../controller');
const { upload } = require('../middleware/multer');
const route = express.Router();




route.post('/post', upload.single('bookImage'), bookController.addBook)
route.get("/getBook", bookController.getBook)
route.get("/getBook:id", bookController.getBookId)
route.delete("/deleteBook/:id", bookController.deleteBook)



module.exports = route; 
const { bookSchema } = require("../model")



const addbook = (body) => {
    return bookSchema.create(body)
}
const getID = (id) => {
    return bookSchema.findById(id)
}

const getBook = () => {
    return bookSchema.find().populate('auth')
}

const deleteBook = (id) => {
    return bookSchema.findByIdAndDelete(id)
}







module.exports = { addbook, getBook, deleteBook, getID }
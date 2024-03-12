const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
    bookname: {
        type: String,
        required: true,
    },
    bookImage: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    auth: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AuthSchema',
    }

})

const book = module.exports = mongoose.model("Book", bookSchema);
module.exports = book;
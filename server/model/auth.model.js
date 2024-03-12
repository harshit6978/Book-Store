const mongoose = require('mongoose');



const authSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
})

const AuthModel = mongoose.model("AuthSchema", authSchema);
module.exports = AuthModel
const { default: mongoose } = require("mongoose");



const useSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["user", 'admin'],
        default: 'user',
        trim: true,
    }
})

const user = mongoose.model('User', useSchema);
module.exports = user;
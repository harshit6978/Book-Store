const mongoose = require('mongoose');


const mongoDb = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/userDB").then(()=>{
        console.log("connected to the database");
    }) 
}
module.exports = mongoDb;
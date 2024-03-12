require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const http = require('http');
const mongoDb = require('./db/Db.connect');
const routes = require('./routes');
const { bookService } = require('./service');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 



// routes 
app.use('/v1', routes)


app.set('view engine', 'ejs');

// app.get('/', async (req, res) => {

//     let book = await bookservice.getbook()

//     console.log(book, "hgfxcvbnklmkh");
//     res.render('./index', { data: book })
// })



//db connect
mongoDb();

// server create 
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server Start on port  ${process.env.PORT}`);
})

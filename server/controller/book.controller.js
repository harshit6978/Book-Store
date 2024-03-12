const { bookService } = require("../service")

const getBook = async (req, res) => {
    try {
        const book = await bookService.getBook();

        res.status(200).json({
            message: "get succes",
            book
        })


    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const getBookId = async (req, res) => {
    try {
        const { id } = req.params

        const Bookid = await bookService.getBookById(id);
        if (!Bookid) {
            return res.status(404).json({ message: "This book is not found" })
        }

        res.status(200).json({
            message: 'succes',
            data: Bookid
        })


    } catch (err) {
        console.log('Error :', err)

    }
}

const addBook = async (req, res) => {
    try {

        // let {data} = req.body
        // const bookImage = req.file.path


        // const body = {
        //     data,
        //     bookImage
        // }

        let { bookname, price, description } = req.body
        let bookImage = req.file.path

        let body = {
            bookname,
            price,
            description,
            bookImage
        }


        let book = await bookService.addbook( body )


        res.status(200).json({ message: "book added success", book })

    } catch (err) {

        res.status(400).json({ success: false, err: err.message })

    }

}

const deleteBook = async (req, res) => {
    try {
        // const body = req.body;
        let { id } = req.params;
        console.log(id);

        const book = await bookService.deleteBook(id);

        res.status(200).json({
            message: "delete successs",
            book
        })
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
}


module.exports = { addBook, getBook, deleteBook, getBookId }
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Book = () => {
    const name = useRef();
    const file = useRef();
    const price = useRef();
    const des = useRef();
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);

    const handleSubmit = () => {
        setLoading(true);
        const bookdata = {
            name: name.current.value,
            file: file.current.files[0],
            price: parseFloat(price.current.value),
            description: des.current.value,
        };
        axios.post('http://localhost:8000/v1/book/post', bookdata).then((res) => {
            console.log(res.data.book, "iiiiiiiiiii");
            setBooks([...books, res.data.book]);
        })
            .catch((error) => {
                console.error('Error submitting book:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const getData = () => {
        // setLoading(true);
        axios.get('http://localhost:8000/v1/book/getBook').then((res) => {
            setBooks(res.data.book);
        })
            .catch((error) => {
                console.error('Error fetching books:', error);
            })
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <input type='text' placeholder='Enter a Book Name' ref={name}></input>
            <input type='file' ref={file}></input>
            <input type='text' placeholder='Enter a Price ' ref={price}></input>
            <input type='text' placeholder='Enter a Description' ref={des}></input>
            <button onClick={handleSubmit} disabled={loading}>Submit</button>
            {loading && <p>Loading...</p>}
            <ul>
                {books?.map((book, index) => (
                    <>
                        <h1 className='bg-red-500 text-red-400 '>{book.bookname}</h1>
                        {book.bookImage && <img src={book.bookImage} alt={book.bookname} />}

                    </>
                ))}
            </ul>
        </>
    );
};

export default Book;

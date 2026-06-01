const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const books = [];
let nextId = 1;


// GET ALL BOOKS
app.get("/books", (req, res) => {
    res.json(books);
});


// GET BOOK BY ID
app.get("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(p => p.id === id);

    // WRONG:
    // if(!id){
    //     return res.status("404").json({error:"Book not Found"})
    // }

    // CORRECT:
    if (!book) {
        return res.status(404).json({
            error: "Book not Found"
        });
    }

    res.json(book);
});


// CREATE BOOK
app.post("/books", (req, res) => {

    const { title, author, isbn } = req.body;

    // WRONG:
    // return res.status("400")

    // CORRECT:
    if (!title || !author || !isbn) {
        return res.status(400).json({
            error: "Title, author and isbn are required"
        });
    }

    const book = {
        id: nextId,
        title,
        author,
        isbn
    };

    nextId = nextId + 1;

    books.push(book);

    // WRONG:
    // res.json(books)

    // CORRECT:
    res.status(201).json(book);
});


// UPDATE BOOK
app.put("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    // WRONG:
    // const filtered = books.filter(p => p.id === id)

    // CORRECT:
    const book = books.find(p => p.id === id);

    // WRONG:
    // if(!id)

    // CORRECT:
    if (!book) {
        return res.status(404).json({
            error: "Book not Found"
        });
    }

    const { title, author, isbn } = req.body;

    if (!title || !author || !isbn) {
        return res.status(400).json({
            error: "Title, author and isbn are required"
        });
    }

    // WRONG:
    // const book = {id:nextId,title,author,isbn}
    // books.push(book)

    // CORRECT:
    book.title = title;
    book.author = author;
    book.isbn = isbn;

    res.json(book);
});


// DELETE BOOK
app.delete("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = books.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Book not Found"
        });
    }

    books.splice(index, 1);

    res.json({
        message: "Book deleted successfully"
    });
});


// SERVER
// WRONG:
// app.listen("3000")

// CORRECT:
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
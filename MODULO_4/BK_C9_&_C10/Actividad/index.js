const express = require("express");
const app = express();
const port = 3000;
const getBooksFromCloud = require("./cloudModel.js");

app.use(express.json());

app.use((req, res, next) => {
    console.log(
        `New Request: ${req.method} | ${
            req.originalUrl
        } | ${new Date().toISOString()}`
    );
    next();
});

const books = [
    {
        bookId: 1,
        author: "Perano",
        name: "The hapiness book",
        gender: "Self Care",
    },
    {
        bookId: 2,
        author: "Sultano",
        name: "The blue man",
        gender: "Fantasy",
    },
    {
        bookId: 3,
        author: "Mendano",
        name: "How to build habits",
        gender: "Self Care",
    },
    {
        bookId: 4,
        author: "Mendano",
        name: "How to be rich",
        gender: "Self Care",
    },
    {
        bookId: 4,
        author: "Mendano",
        name: "How to be badass",
        gender: "Action",
    },
];

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

app.post("/books", (req, res, next) => {
    if (
        req.body.author &&
        req.body.bookId &&
        req.body.name &&
        req.body.gender
    ) {
        next();
    } else {
        res.status(400).json({
            status: 400,
            message: "Error on given parameters",
        });
    }
});

app.all("/ping", (req, res) => {
    res.send("Server PING success!");
});

app.get("/books/:bookId", (req, res) => {
    console.log(req.params);
    if (req.params.bookId === "all") {
        res.send({
            status: 200,
            message: "Query executed successfully",
            data: books,
        });
    } else {
        const results = books.filter(
            (book) => book.bookId == req.params.bookId
        );
        res.send({
            status: 200,
            message: "Query executed successfully",
            data: results,
        });
    }
});

app.get("/booksQuery", (req, res) => {
    console.log(req.query); // { bookId: '3' }
});

app.post("/books", (req, res) => {
    console.log(req.body);
    books.push(req.body);
    res.json({
        status: 200,
        message: "Query executed successfully",
        inserted: req.body,
    });
});

app.get("/genders/:gender/authors/:author", (req, res) => {
    console.log(req.params);
    const results = books.filter(
        (book) =>
            book.gender == req.params.gender && book.author == req.params.author
    );
    res.send({
        status: 200,
        message: "Query executed successfully",
        data: results,
    });
});

app.get("books/cloud", async (req, res) => {
    const books = await getBooksFromCloud();
    if (books) {
        res.status(200).json(books);
    } else {
        res.status(400).json({ message: "No books were downloaded" });
    }
});
module.exports = app;

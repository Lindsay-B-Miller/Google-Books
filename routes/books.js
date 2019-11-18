const axios = require("axios");
const router = require("express").Router();
require('dotenv').config()
const db = require("../models");

const APIkey = process.env.BOOKS_API

router.get("/books", (req, res) => {
    let request = "https://www.googleapis.com/books/v1/volumes?q=" + req.query.q.replace(/\s/g, "+") + "&key=" + APIkey;
    axios
        .get(request)
        .then((response) => {
            res.json(response.data.items)
        })
        .catch(err => {
            res.status(422).json(err)
        });
});

router.post("/books/:id", (req, res) => {
    console.log("post route hit")
    console.log("params: " + req.params.id)
    console.log("body: " + JSON.stringify(req.body));
    db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

module.exports = router;
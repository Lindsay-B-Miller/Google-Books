const axios = require("axios");
const router = require("express").Router();
require('dotenv').config()

const key = process.env.BOOKS_API

router.get("/books", (req, res) => {
    console.log("this endpoint was hit!")

    let request = "https://www.googleapis.com/books/v1/volumes?q=" + req.query.q.replace(/\s/g, "+") + "&key=" + key;
    console.log(req.query)
    console.log(request)
    axios
        .get(request)
        .then((response) => {

            // console.log(response.data)
            res.json(response.data.items)
        })
        .catch(err => {
            res.status(422).json(err)
        });
});

module.exports = router;
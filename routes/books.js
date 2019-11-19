const axios = require("axios");
const router = require("express").Router();
const db = require("../models");

router.get("/books", (req, res) => {
    let request = "https://www.googleapis.com/books/v1/volumes?q=" + req.query.q.replace(/\s/g, "+");
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
});

router.get("/books/saved", (req, res) => {
    console.log("Get saved books ran")
    db.Book
        .find()
        .then(savedBooks => {
            console.log(savedBooks)
            res.json(savedBooks)
        })
        .catch(err => {
            res.status(422).json(err)
        })
});

router.delete("/books/:id", (req, res) => {
    console.log("delete route hit")
    db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;
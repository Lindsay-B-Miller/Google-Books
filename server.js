const express = require("express");
// const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/books");
const path = require('path');
const PORT = process.env.PORT || 4003
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static assets (heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    // if no api routes are hit, send the react app
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}


// Define API routes here
app.use("/api", routes);

// Sending every other request to the React app
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks", { useNewUrlParser: true }
)

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
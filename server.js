const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4001
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static assets (heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here

// Sending every other request to the React app
app.get("*", (req, res) => {
    res.sendFile(patth.join__dirname, "./client/build/index.html")
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
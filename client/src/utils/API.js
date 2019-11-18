import axios from "axios";


// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the books api for
export default {
    getBooks: function (query) {
        return axios.get("/api/books", { params: { q: query } });
    },

    saveBook: function (id, data) {
        console.log("saveBook ran")
        console.log(data);
        return axios.post("/api/books/" + id, data)
    }
};

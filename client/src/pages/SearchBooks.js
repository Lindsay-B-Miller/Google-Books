import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
// import Saved from "./Saved";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid/index.js";
import "./App.css";
require('dotenv').config()



class SearchBooks extends Component {
    state = {
        books: [],
        bookSearch: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get books update the books state
        event.preventDefault();
        // console.log(this.state.bookSearch)
        API.getBooks(this.state.bookSearch)
            .then(res => {
                this.setState({ books: res.data })
                console.log(this.state.books)
            })
            .catch(err => console.log(err));
    };

    saveBook = (id, book) => {
        console.log(id)
        API.saveBook(id, book)
            .then(res =>
                console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>
                                <h1>React Google Book Search</h1>
                            </Jumbotron>
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="bookSearch"
                                                value={this.state.bookSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search For a Book"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <Button
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg mb-5" >
                                                Search
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            {!this.state.books.length ? (
                                <div>
                                    <Container>
                                        <h2>No Books to Display.</h2>
                                        <h4>Search for a book to get started!</h4>
                                    </Container>
                                </div>
                            ) : (
                                    <BookList>
                                        {this.state.books.map(book => {
                                            return (
                                                <BookListItem
                                                    title={book.volumeInfo.title}
                                                    authors={book.volumeInfo.authors}
                                                    description={book.volumeInfo.description}
                                                    image={book.volumeInfo.imageLinks.thumbnail}
                                                    link={book.volumeInfo.infoLink}
                                                    id={book.id}
                                                    book={book}
                                                    saveBook={this.saveBook}
                                                />
                                            );
                                        })}
                                    </BookList>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SearchBooks;

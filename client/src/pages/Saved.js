import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getSavedBooks()
            .then(res => {
                this.setState({ books: res.data },
                )
                console.log(res.data);
                console.log(this.state.books)
            })
            .catch(err => console.log(err))
    }

    deleteBook = (id) => {
        console.log(id)
        API.deleteBook(id)
            .then(res =>
                this.loadBooks())
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Container>
                <div>
                    <Jumbotron>
                        <div>
                            <h1>Saved Books</h1>
                            <h4>React Google Book Search</h4>
                        </div>
                    </Jumbotron>

                    <Row>
                        <Col size="xs-12">
                            {!this.state.books.length ? (
                                <Container>
                                    <h2>No Books to Display.</h2>
                                    <h4>Visit the home page to search for and save your favorite titles</h4>
                                </Container>
                            ) : (
                                    <BookList>
                                        {this.state.books.map(book => {
                                            return (
                                                <BookListItem
                                                    title={book.title}
                                                    authors={book.authors}
                                                    description={book.description}
                                                    image={book.image}
                                                    link={book.link}
                                                    id={book._id}
                                                    deleteBook={this.deleteBook}
                                                />
                                            );
                                        })}
                                    </BookList>
                                )}
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Saved;

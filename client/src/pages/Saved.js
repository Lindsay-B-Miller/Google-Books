import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
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
            <div>
                <Jumbotron>
                    <h1>Saved Books</h1>
                </Jumbotron>

                <Row>
                    <Col size="xs-12">
                        {!this.state.books.length ? (
                            <h1 className="text-center">No Saved Books</h1>
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
        );
    }
}

export default Saved;

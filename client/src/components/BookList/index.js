import React from "react";
import Image from "../Image";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
    link,
    title,
    authors,
    description,
    image,
    id,
    saveBook,
    deleteBook
}) {
    return (
        <li className="list-group-item" id={id}>
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Image src={image} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>Author(s): {authors}</p>
                        <p>Description: {description}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary mr-2">Go to Book</button></a>
                        {!(window.location.pathname === "/saved") ?
                            <button onClick={() => { saveBook(id, { id, title, authors, description, link, image }) }} id={id} type="button" className="btn btn-success">Save Book</button>
                            :
                            <button onClick={() => { deleteBook(id, { id, title, authors, description, link, image }) }} id={id} type="button" className="btn btn-danger">Delete Book</button>
                        }
                    </Col>
                </Row>
            </Container>
        </li >
    );
}


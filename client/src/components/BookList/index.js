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
    saveBook
}) {
    return (
        <li className="list-group-item" id={id}>
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Image src={image} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h1>{id}</h1>
                        <h3>{title}</h3>
                        <p>Authors: {authors}</p>
                        <p>Description: {description}</p>
                        <a rel="noreferrer noopener" target="_blank" href={link}>
                            Go to Book!
                        </a>
                        <button onClick={() => { saveBook(id, { id, title, authors, description, link, image }) }} id={id} type="button" className="btn btn-success">Save Book</button>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}


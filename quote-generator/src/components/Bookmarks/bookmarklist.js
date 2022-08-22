import React from "react";
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Bookmarklist = () => {

    const bookmarks = useSelector((state) => state.bookmarks);
    console.log(bookmarks);
    return (

        <Container>
            {bookmarks.map((bookmark) => {
                
                 ( 
                    <Card class='p-5 bg-primary text-dark' id="card">
                        <Card.Body class='p-4 bg-primary text-dark rounded'>
                            <blockquote className="blockquote mb-0">
                                <p>{bookmark.content}</p><br />
                                <footer className="blockquote-footer">
                                    <cite title="Source Title">{bookmark.author}</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                 )
            })}
               
      
        </Container>
    );
}

export default Bookmarklist;
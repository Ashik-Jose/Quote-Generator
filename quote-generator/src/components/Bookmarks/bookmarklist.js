import React from "react";
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import BookmarkCard from "../Cards/bookmarkcard";

const Bookmarklist = () => {

    const bookmarks = useSelector((state) => state.bookmarks);
    return (

        <Container className="mt-3">
            {bookmarks.map((bookmark) =>
            (
                <Col span={4} className="p-4">
                    <BookmarkCard content={bookmark.content} author={bookmark.author} />
                </Col>
            )
            )}
        </Container>
    );
}

export default Bookmarklist;
import Card from 'react-bootstrap/Card';
import './cards.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Bookmarks from '../../Bookmarks';
import Bookmarklist from '../Bookmarks/bookmarklist';
import { getBookmarks } from '../../actions/quotes';


const Cards = () => {

  const dispatch = useDispatch();

  const quotes = useSelector((state) => state.quotes);
  const content = quotes.content;
  const author = quotes.author;
  const [filled,setfilled] = useState(false);
  //const [bookmarks,setbookmarks] = useState();
  const bookmarkclass = filled ?"bi bi-bookmark-plus-fill" : "bi bi-bookmark-plus" ;


  return (
    <div class='m-5 p-5 '>
      <Card class='p-5 bg-primary text-dark' id="card">
        <Card.Body class='p-4 bg-primary text-dark rounded'>
          <blockquote className="blockquote mb-0">
            <p>{content}</p><br />
            <footer className="blockquote-footer">
              <cite title="Source Title">{author}</cite><br/><br/>
              <i class={bookmarkclass} variant="success" onClick={()=> {
                 setfilled(!filled);
                 if(!filled)
                 {
                    const bookmarks = {content: content,author: author};
                    console.log(bookmarks);
                    dispatch({type:'BOOKMARKS', payload:bookmarks});
                 }
              }}></i>
            </footer>
          </blockquote>
        </Card.Body>
      </Card></div>
  );
}

export default Cards;
import Card from 'react-bootstrap/Card';
import './cards.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Loading from '../../Spinner/spinner';


const Cards = () => {

  const dispatch = useDispatch();

  const quotes = useSelector((state) => state.quotes);
  const content = quotes.content;
  const author = quotes.author;
  const [filled, setfilled] = useState(false);
  const bookmarkclass = filled ? "bi bi-bookmark-plus-fill" : "bi bi-bookmark-plus";

  useEffect(() => {
    setfilled(false);
  }, [quotes])


  return (

    !quotes.length ? <Loading /> : (

      <div class='mt-3 p-5 '>
        <Card class='p-4 bg-primary text-light' id="card">
          <Card.Body class='p-4  text-light rounded'>
            <blockquote className="blockquote mb-0">
              <p>{content}</p><br />
              <footer className="blockquote-footer text-light" id="footer">
                <cite title="Source Title">{author}&emsp;</cite>
                <i class={bookmarkclass} onClick={() => {
                  setfilled(!filled);
                  if (!filled) {
                    const bookmarks = { content: content, author: author };
                    dispatch({ type: 'BOOKMARKS', payload: bookmarks });
                  }
                }}>
                </i>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        </div>
    )
  );
}

export default Cards;
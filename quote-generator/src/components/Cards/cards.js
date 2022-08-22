import Card from 'react-bootstrap/Card';
import './cards.css';
import { useSelector } from 'react-redux';


const Cards = () => {

  const quotes = useSelector((state) => state.quotes);
  const content = quotes.content;
  const author = quotes.author;
  return (
    <div class='m-5 p-5 '>
      <Card class='p-5 bg-primary text-dark' id="card">
        <Card.Body class='p-4 bg-primary text-dark rounded'>
          <blockquote className="blockquote mb-0">
            <p>{content}</p><br />
            <footer className="blockquote-footer">
              <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card></div>
  );
}

export default Cards;
import { books } from './bookData';
import BookCard from './BookCard';
import { useState } from 'react';

const BookList = () => {
  const [booksData, setBooksData] = useState(books);

  const eventHandler = (id)=>{
    console.log('Clicked',id);
    
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Top Books of All Time 📚</h2>

      <div className="book-grid">
        {booksData.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            genre={book.genre}
            stock={book.stock}
            isFavorite={book.isFavorite}
            onEventHandler={()=>eventHandler(book.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;

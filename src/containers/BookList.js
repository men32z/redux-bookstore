import React from 'react';
import Book from '../components/Book';

const BookList = (books) => {
  const booksMap = books.map(x =>
    (<Book key={x.id}/>)
  )
    return (
      <table>
        {booksMap}
      </table>
    );
}

export default BookList;
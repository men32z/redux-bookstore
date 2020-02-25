import React from 'react';

const BookList = (books) => {
  const booksMap = books.map(x => {
    <Book key={book.id}/>
  })
    return (
      <table>
        {booksMap}
      </table>
    );
}

export default BookList;
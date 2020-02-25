const booksReducer = (books = [], {type, book}) => {
  switch (type) {
    case 'CREATE_BOOK':
      return [...books, book];
    case 'REMOVE_BOOK':
      return books.filter(x => x.id !== book.id)
    default:
      return books;
  }
}

export default booksReducer;
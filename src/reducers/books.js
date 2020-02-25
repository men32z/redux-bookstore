let defaultBooks = [
  {id: Math.random(), title: 'Little Prince', category: "Action"},
  {id: Math.random(), title: 'Star Wars', category: "History"},
  {id: Math.random(), title: 'Scary Movie', category: "Horror"},
  {id: Math.random(), title: 'React Basics', category: "Learning"},
  {id: Math.random(), title: 'H.P.', category: "Kids"},
]

const booksReducer = (books = defaultBooks, {type, book}) => {
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
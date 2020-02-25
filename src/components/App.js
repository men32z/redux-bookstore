import React from 'react';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <BooksForm />
      <BookList />
    </div>
  );
}

export default App;

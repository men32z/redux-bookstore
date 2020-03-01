import React from 'react';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

function App() {
  return (
    <div className="big-container">
      <Header />
      <div className="container">
        <BookList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;

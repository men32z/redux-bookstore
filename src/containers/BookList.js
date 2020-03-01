import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = ({ books, removeBook }) => {
  const booksMap = books.map(x => (<Book key={x.id} removeBook={removeBook} book={x} />));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {booksMap}
        </tbody>
      </table>
    </div>
  );
};
BookList.defaultProps = {
  books: [],
  removeBook: () => {},
};
BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func,
};

const mapStateToProps = state => ({ books: state.booksReducer });
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

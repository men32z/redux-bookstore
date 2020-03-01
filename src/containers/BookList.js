import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, removeBook, filter, setFilter,
}) => {
  const booksMap = books.filter(x => filter === 'ALL' || x.category === filter)
    .map(x => (<Book key={x.id} removeBook={removeBook} book={x} />));
  return (
    <div>
      <CategoryFilter setFilter={setFilter} filter={filter} />
      {booksMap}
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
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.booksReducer, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  setFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

import React from 'react';
import {connect} from 'react-redux';
import Book from '../components/Book';

const BookList = ({books}) => {
  const booksMap = books.map(x =>
    (<Book key={x.id} book={x}/>)
  )
    return (
      <div>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
          <tbody>
            {booksMap}
          </tbody>
        </table>
      </div>
    );
}

const mapStateToProps = state => ({books: state.booksReducer});

export default connect(mapStateToProps)(BookList);
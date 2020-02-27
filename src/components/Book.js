import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook() {
    const { book: { id, title, category }, removeBook } = this.props;
    return removeBook({ id, title, category });
  }

  render() {
    const { book: { id, title, category } } = this.props;
    return (
      <tr>
        <td>
          {id}
        </td>
        <td>
          {title}
        </td>
        <td>
          {category}
        </td>
        <td>
          <button onClick={this.handleRemoveBook} type="button">x</button>
        </td>
      </tr>
    );
  }
}

Book.defaultProps = {
  book: {},
  removeBook: () => {},
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  removeBook: PropTypes.func,
};

export default Book;

import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(e) {
    e.preventDefault();
    const { book: { id, title, category }, removeBook } = this.props;
    return removeBook({ id, title, category });
  }

  render() {
    const { book: { id, title, category } } = this.props;
    return (
      <div className="book">
        <span>
          {id}
        </span>
        <span>
          {title}
        </span>
        <span>
          {category}
        </span>
        <span>
          <a href="#" onClick={this.handleRemoveBook} type="button">Remove</a>
        </span>
      </div>
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

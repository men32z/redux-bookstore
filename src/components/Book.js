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
        <div className="data">
          <div className="book-data">
            <span style={{display:'none'}}>
              {id}
            </span>
            <span className="book-category">
              {category}
            </span>
            <span className="book-title">
            {title}
            </span>
          </div>
          <div className="links">
            <span>
              <a href="#" onClick={this.handleRemoveBook} type="button">Remove</a>
            </span>
          </div>
        </div>
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

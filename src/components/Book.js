import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category } }) => (
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
  </tr>
);

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: {
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  },
};

export default Book;

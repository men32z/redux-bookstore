import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import categories from '../data/categories';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { addBook } = this.props;
    if (title) {
      addBook({ id: `_${Math.random().toString(36).substr(2, 9)}`, title, category });
      this.setState({ title: '', category: 'Action' });
    }
    return true;
  }

  render() {
    const options = categories.map(x => <option key={x} value={x}>{x}</option>);
    const { title, category } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="title" onChange={this.handleChange} value={title} required />
          <select id="category" onChange={this.handleChange} value={category}>
            {options}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(createBook(book)),
});

BooksForm.defaultProps = {
  addBook: () => {},
};

BooksForm.propTypes = {
  addBook: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(BooksForm);

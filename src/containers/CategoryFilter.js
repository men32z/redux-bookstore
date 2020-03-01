import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux';
import filter from '../actions';
import categories from '../data/categories';

function CategoryFilter({}){
  const options = ['ALL', ...categories].map(x => <option key={x} value={x}>{x}</option>);
  return (
    <select id="categoryFilter">
      {options}
    </select>
  );
}

export default connect(mapStateToProps, mapDispatchtoProps)(CategoryFilter);
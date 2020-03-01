import React from 'react';
import PropTypes from 'prop-types';
import categories from '../data/categories';

function CategoryFilter({ setFilter, filter }) {
  function handleFilterChange(e) {
    setFilter(e.target.value);
  }
  const options = ['ALL', ...categories].map(x => <option key={x} value={x}>{x}</option>);
  return (
    <select id="categoryFilter" onChange={handleFilterChange} defaultValue={filter}>
      {options}
    </select>
  );
}

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;

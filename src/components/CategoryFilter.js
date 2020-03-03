import React from 'react';
import PropTypes from 'prop-types';
import categories from '../data/categories';

function CategoryFilter({ handleFilterChange, filter }) {
  const options = ['ALL', ...categories].map(x => <option key={x} value={x}>{x}</option>);
  return (
    <div className="category-filter">
      <span className="title-2"> FILTER: </span>
      <select id="categoryFilter" onChange={handleFilterChange} defaultValue={filter}>
        {options}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

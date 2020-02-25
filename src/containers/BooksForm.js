import React from 'react';

const BooksForm = () => {
  const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi']
    .map(x => <option key={x} value={x}>{x}</option>);
  return (
    <div>
      <input />
      <select>
        {options}
      </select>
      <button type="submit">Submit</button>
    </div>
  );
};

export default BooksForm;

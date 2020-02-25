import React from 'react';

const BooksForm = (books) => {
  const options = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
    .map(x => <option key={x} value={x}>{x}</option>)
    return (
      <div>
        <input />
        <select>
          {options}
        </select>
        <button>Submit</button>
      </div>
    );
}

export default BooksForm;
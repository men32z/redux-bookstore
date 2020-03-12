import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1 className="title">Bookstore CMS</h1>
        <ul>
          <li>
            <a href="/#">BOOKS</a>
          </li>
          <li>
            <a href="/#">CATEGORIES</a>
          </li>
        </ul>
        <div className="oval">
          <img src="user.png" alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Header;

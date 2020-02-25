import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const getID = () => '_' + Math.random().toString(36).substr(2, 9);

let defaultProps = {booksReducer: [
  {id: getID(), title: 'Little Prince', category: "Action"},
  {id: getID(), title: 'Star Wars', category: "History"},
  {id: getID(), title: 'Scary Movie', category: "Horror"},
  {id: getID(), title: 'React Basics', category: "Learning"},
  {id: getID(), title: 'H.P.', category: "Kids"},
]};

let store = createStore(rootReducer, defaultProps);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState(''); 
  
  const handleAddBook = (e) => {
    e.preventDefault(); // prevent page refresh
    if (title.trim() === '' || author.trim() === '') return;

    // Add new book
    const newBook = { title, author };
    setBooks([...books, newBook]);

    // clear inputs
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="App">
      <form onSubmit={handleAddBook}>
        <h1>My Book Collection</h1>
       
        <input type="text" id="title" name="title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)}/><br />
        <br />
        <input type="text" id="author" name="author" placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)}/><br />
        <br />
        <button type="submit">Add Book</button>

        <hr></hr>

         <div className="book-list">
          {books.length === 0 ? (
            <p>No books in collection</p>
          ) : (
            <ul>
              {books.map((book, index) => (
                <li 
                  key={index} 
                  style={{ color: book.title.length > 20 ? 'blue' : 'black' }}
                >
                  {book.title} by {book.author}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>  
  );
}

export default App;
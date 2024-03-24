import React, { useState } from 'react';

function BookDisplay({ books }) {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
}

function BookSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('There was a problem fetching the books:', error);
    }
  };

  return (
    <div>
      <h1>Book Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter book title"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <BookDisplay books={books} />
    </div>
  );
}

export default BookSearch;

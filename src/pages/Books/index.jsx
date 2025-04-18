import React, { useState } from 'react'
import BookCard from '../../components/cards/BookCard'
import "./index.css"
import booksJSON from "../../common/books.json"

function Books() {
  const [books, setBooks] = useState(booksJSON)
  const handleEditBook = () => {
    console.log("Editovanje knjige")
  }
  const handleDeleteBook = () => {
    console.log("Brisanje knjige")
  }

  return (
    <div>
      <div className='grid-container'>
        {
          books.map((book) => {
            return (
            <BookCard 
              key={book.id} 
              bookName={book.bookName} 
              author={book.author} 
              year={book.year}
              genre={book.genre}
              onEdit={() => handleEditBook()}
              onDelete={() => handleDeleteBook()}
              imageClassName="book-image"
              />)
          })
        }
      </div>
    </div>
  )
}

export default Books
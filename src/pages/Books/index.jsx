import React, { useState } from 'react'
import BookCard from '../../components/cards/BookCard'
import ConfirmDeleteModal from '../../components/modals/ConfirmDeleteModal'
import "./index.css"
import booksJSON from "../../common/books.json"

function Books() {
  const [books, setBooks] = useState(booksJSON)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)

  const handleEditBook = () => {
    console.log("Editovanje knjige")
  }

  const handleDeleteClick = (book) => {
    setSelectedBook(book)
    setDeleteModalOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (selectedBook) {
      const filteredBooks = books.filter((book) => book.id !== selectedBook.id)
      setBooks(filteredBooks)
      setDeleteModalOpen(false)
      setSelectedBook(null)
    }
  }

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false)
    setSelectedBook(null)
  }

  return (
    <div>
      <div>
        {books.length === 0 ? (
          <div className="empty-books-container">
            <div className="empty-books-message">
              <p>Trenutno nema knjiga u biblioteci.</p>
            </div>
          </div>
        ) : (
          <div className='grid-container'>
            {books.map((book) => {
              return (
                <BookCard 
                  key={book.id} 
                  bookName={book.bookName} 
                  author={book.author} 
                  year={book.year}
                  genre={book.genre}
                  onEdit={handleEditBook}
                  onDelete={() => handleDeleteClick(book)}
                  imageClassName="book-image"
                />)
            })}
          </div>
        )}
      </div>
      <ConfirmDeleteModal
        open={deleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        bookName={selectedBook?.bookName}
      />
    </div>
  )
}

export default Books
import React, { useState } from 'react'
import BookCard from '../../components/cards/BookCard'
import ConfirmDeleteModal from '../../components/modals/ConfirmDeleteModal'
import "./index.css"
import booksJSON from "../../common/books.json"
import EditModal from '../../components/modals/editModal'
import AddBookModal from '../../components/modals/addBookModal'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

function Books() {
  const [books, setBooks] = useState(booksJSON)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)

  const handleEditBook = (book) => {
    setSelectedBook(book)
    setEditModalOpen(true)
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

  const handleEditConfirm = (updatedBook) => {
    if (selectedBook) {
      const updatedBooks = books.map((book) => 
        book.id === selectedBook.id ? { ...book, ...updatedBook } : book
      )
      setBooks(updatedBooks)
      setEditModalOpen(false)
      setSelectedBook(null)
    }
  }

  const handleAddBook = () => {
    setAddModalOpen(true)
  }

  const handleAddConfirm = (newBook) => {
    // Add new book with unique ID
    const newId = Math.max(...books.map(book => book.id), 0) + 1
    const bookToAdd = {
      id: newId,
      ...newBook
    }
    setBooks([...books, bookToAdd])
    setAddModalOpen(false)
  }

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false)
    setSelectedBook(null)
  }
  
  const handleEditCancel = () => {
    setEditModalOpen(false)
    setSelectedBook(null)
  }

  const handleAddCancel = () => {
    setAddModalOpen(false)
  }

  return (
    <div className="books-container">
      <div className="books-header">
        <h1>Biblioteka</h1>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          onClick={handleAddBook}
        >
          Dodaj knjigu
        </Button>
      </div>

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
                  onEdit={() => handleEditBook(book)}
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
      <EditModal
        open={editModalOpen}
        onClose={handleEditCancel}
        onConfirm={handleEditConfirm}
        book={selectedBook}
      />
      <AddBookModal
        open={addModalOpen}
        onClose={handleAddCancel}
        onConfirm={handleAddConfirm}
      />
    </div>
  )
}

export default Books
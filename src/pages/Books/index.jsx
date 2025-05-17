import React, { useEffect, useState } from 'react'
import BookCard from '../../components/cards/BookCard'
import ConfirmDeleteModal from '../../components/modals/ConfirmDeleteModal'
import "./index.css"
import booksJSON from "../../common/books.json"
import EditModal from '../../components/modals/editModal'
import AddBookModal from '../../components/modals/addBookModal'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { getBooks, addBook } from '../../../firebase'

function Books() {
  const [books, setBooks] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)

  const getBaseBooks = async () => {
  const books = await getBooks()
  setBooks(books)
  setLoading(false)
  }

  useEffect(() => {
    getBaseBooks()
  }, [])

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
    addBook(newBook)
    setLoading(true)
    getBaseBooks()
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

  if (loading) {
    return (
      <div className='books-spinner-container'><span class="loader"></span></div>
    )
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
        {!books ? (
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
import { useEffect, useState } from 'react'
import BookCard from '../../components/cards/BookCard'
import ConfirmDeleteModal from '../../components/modals/ConfirmDeleteModal'
import "./index.css"
import EditModal from '../../components/modals/editModal'
import AddBookModal from '../../components/modals/addBookModal'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { getBooks, addBook, editBook, deleteBook } from '../../../firebase'
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

function Books() {
  const [books, setBooks] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)

    const exportToPDF = (books) => {
    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    const tableColumn = ["Ime Knjige", "Autor", "Godina Izdanja", "Žanr"];
    const tableRows = books.map(book => [
      book.bookName,
      book.author,
      book.year.toString(),
      book.genre
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("books.pdf");
  };

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

  const handleDeleteConfirm = async (deletedBook) => {
    if (selectedBook) {
      await deleteBook(selectedBook.id, deletedBook)
      setDeleteModalOpen(false)
      setLoading(true)
      await getBaseBooks()
      setSelectedBook(null)
    }
  }

  const handleEditConfirm = async (updatedBook) => {
    if (selectedBook) {
      await editBook(selectedBook.id, updatedBook)
      setEditModalOpen(false)
      setLoading(true)
      await getBaseBooks()
      setSelectedBook(null)
    }
  }

  const handleAddBook = () => {
    setAddModalOpen(true)
  }

  const handleAddConfirm = async (newBook) => {
    await addBook(newBook)
    setLoading(true)
    await getBaseBooks()
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
      <div className='books-spinner-container'><span className="loader"></span></div>
    )
  }

  return (
    <div className="books-container">
      <div className="books-header">
        <h1>Biblioteka</h1>
        <div className='buttons-header'>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
            onClick={handleAddBook}
          >
            Dodaj knjigu
          </Button>
          {books && <Button 
            variant="contained" 
            color="primary" 
            startIcon={<PictureAsPdfIcon />}
            onClick={() => exportToPDF(books)}
          >
            Preuzmi knjige
          </Button>}
        </div>
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
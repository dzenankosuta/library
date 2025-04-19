import React, { useState } from 'react'
import BookCard from '../../components/cards/BookCard'
import "./index.css"
import booksJSON from "../../common/books.json"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Books() {
  const [books, setBooks] = useState(booksJSON)
  const handleEditBook = () => {
    console.log("Editovanje knjige")
  }
  const handleDeleteBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id)
    setBooks(filteredBooks)
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
{
  books.length === 0 ? (
    <div><p>Trenutno nema knjiga.</p></div>
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
              onEdit={() => handleClickOpen()}
              onDelete={() => handleDeleteBook(book.id)}
              imageClassName="book-image"
              />)
            })}
    </div>
  )
}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Books
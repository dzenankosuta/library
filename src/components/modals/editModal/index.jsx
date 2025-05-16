import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';

function EditModal({ open, onClose, onConfirm, book }) {
  const [formData, setFormData] = useState({
    bookName: '',
    author: '',
    year: '',
    genre: '',
  });

  useEffect(() => {
    if (book) {
      setFormData({
        bookName: book.bookName || '',
        author: book.author || '',
        year: book.year || '',
        genre: book.genre || '',
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    onConfirm(formData);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="edit-dialog-title"
      PaperProps={{
        className: 'edit-modal'
      }}
    >
      <DialogTitle id="edit-dialog-title" sx={{ fontSize: 24, fontWeight: 'bold' }}>
        Izmena knjige
      </DialogTitle>
      <DialogContent sx={{ width: '100%' }}>
        <Box
          component="form"
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            mt: 2,
            px: 1
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
            id="bookName" 
            label="Naziv knjige" 
            variant="outlined" 
            value={formData.bookName}
            onChange={handleChange}
            fullWidth
            size="medium"
          />
          <TextField 
            id="author" 
            label="Autor" 
            variant="outlined" 
            value={formData.author}
            onChange={handleChange}
            fullWidth
            size="medium"
          />
          <TextField 
            id="year" 
            label="Godina izdanja" 
            variant="outlined" 
            value={formData.year}
            onChange={handleChange}
            fullWidth
            size="medium"
          />
          <TextField 
            id="genre" 
            label="Žanr" 
            variant="outlined" 
            value={formData.genre}
            onChange={handleChange}
            fullWidth
            size="medium"
          />
        </Box>
      </DialogContent>

      <DialogActions className="edit-modal-actions">
        <Button 
          onClick={onClose}
          variant="outlined"
        >
          Odustani
        </Button>
        <Button 
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          autoFocus
        >
          Sačuvaj
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditModal;

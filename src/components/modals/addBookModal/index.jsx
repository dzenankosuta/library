import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';

function AddBookModal({ open, onClose, onConfirm }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        className: 'add-modal'
      }}
    >
      <DialogTitle id="alert-dialog-title" fontSize={30}>
        Dodavanje knjige
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" fontSize={18}>
          Unesi sva polja
        </DialogContentText>
      </DialogContent>

      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1.5, ml: 10, width: '55ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Naziv knjige" variant="outlined" />
      <TextField id="outlined-basic" label="Autor" variant="outlined" />
      <TextField id="outlined-basic" label="Godina izdanja" variant="outlined" />
      <TextField id="outlined-basic" label="Žanr" variant="outlined" />
      </Box>

      <DialogActions className="add-modal-actions">
        <Button 
          onClick={onClose}
          variant="outlined"
        >
          Odustani
        </Button>
        <Button 
          onClick={onConfirm}
          variant="contained"
          color="primary"
          autoFocus
        >
          Dodaj
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddBookModal;

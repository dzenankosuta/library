import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './index.css';

function ConfirmDeleteModal({ open, onClose, onConfirm, bookName }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="delete-dialog-title"
      PaperProps={{
        className: 'delete-modal'
      }}
    >
      <DialogTitle id="delete-dialog-title" sx={{ fontSize: 24, fontWeight: 'bold' }}>
        Potvrda brisanja
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-dialog-description" sx={{ fontSize: 16, mt: 1 }}>
          Da li ste sigurni da želite da obrišete knjigu "{bookName}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions className="delete-modal-actions">
        <Button 
          onClick={onClose}
          variant="outlined"
        >
          Odustani
        </Button>
        <Button 
          onClick={onConfirm}
          variant="contained"
          color="error"
          autoFocus
        >
          Obriši
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDeleteModal;

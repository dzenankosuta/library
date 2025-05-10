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

function EditModal({ open, onClose, onConfirm, book }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        className: 'edit-modal'
      }}
    >
      <DialogTitle id="alert-dialog-title" fontSize={30}>
        Izmena knjige
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" fontSize={18}>
          Nakon izmena knjige "{book?.bookName}" sačuvati promene.
        </DialogContentText>
      </DialogContent>

      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1.5, ml: 10, width: '55ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Naziv knjige" variant="outlined" defaultValue={book?.bookName} />
      <TextField id="outlined-basic" label="Autor" variant="outlined" defaultValue={book?.author} />
      <TextField id="outlined-basic" label="Godina izdanja" variant="outlined" defaultValue={book?.year} />
      <TextField id="outlined-basic" label="Žanr" variant="outlined" defaultValue={book?.genre} />
      </Box>

      <DialogActions className="edit-modal-actions">
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
          Sačuvaj
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditModal;

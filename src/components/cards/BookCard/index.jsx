import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function BookCard({bookName, author, year, genre, onEdit, onDelete}) {
  return (
    <Card sx={{ maxWidth: 285 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://pngimg.com/uploads/book/book_PNG2111.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {bookName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
        {author}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
        {year}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
        {genre}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit()}><EditIcon/></Button>
        <Button size="small" onClick={() => onDelete()}><DeleteIcon/></Button>
      </CardActions>
    </Card>
  )
}

export default BookCard
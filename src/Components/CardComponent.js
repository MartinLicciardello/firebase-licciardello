import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardComponent({celularesData}) {
  return (
    <Card sx={{ maxWidth: 345,margin: 10 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image={celularesData.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {celularesData.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio:{celularesData.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock:{celularesData.stock}
        </Typography>
      </CardContent>
    </Card>
  );
}

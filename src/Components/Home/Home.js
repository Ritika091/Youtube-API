import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    const styles={textAlign:"start",fontWeight:"600",fontSize:"17px"};
    const s={textAlign:"start"}
  return (
    <Card sx={{ maxWidth: 345, marginTop:"2rem", marginLeft:"3rem", height:"20rem" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://i.ytimg.com/vi/KKQxya-N6A0/maxresdefault.jpg"
        />
        <CardContent>
          <Typography sx={styles} gutterBottom variant="h6" component="div">
          Srikant Vs The Kids | The Family Man | Srikant, Dhriti, Atharv | Prime Video
          </Typography>
          <Typography variant="body2" sx={s} color="text.secondary">
            Prime Video India
          </Typography>
          <Typography variant="body2" sx={s} color="text.secondary">
            3.5M Views . 4 months ago
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
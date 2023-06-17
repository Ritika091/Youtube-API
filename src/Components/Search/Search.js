import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from '../Navbar/Navbar'
import './Search.css'
export default function ActionAreaCard() {
  return (
    <>
    <Navbar/>
    <div className="SearchSec">
        <div className="card">
    <Card sx={{ maxWidth: 345,marginLeft:"4rem",marginTop:"4rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="700"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        {/* <CardContent> */}
        </CardActionArea>
    </Card>
    </div>
    <div className="content">
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          </div>
        {/* </CardContent> */}
        </div>
    </>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';

export default function ActionAreaCard() {
    const styles={textAlign:"start",fontWeight:"600",fontSize:"17px"};
    const s={textAlign:"start"}

    useEffect(()=>{
    const showvideo=()=>{
      const params={
        part: 'contentDetails,snippet,statistics',
    id: '7ghhRHRP6t4'
      }
      const queryString = new URLSearchParams(params).toString();
      fetch(`https://youtube-v31.p.rapidapi.com/videos?${queryString}`,{
        method:"get",
        headers: {
          'X-RapidAPI-Key': '894026b4c9msh3adf9faf2418584p15519cjsn0996d882981d',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }

      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
      }).catch(err=>console.log(err))
    }
  })
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
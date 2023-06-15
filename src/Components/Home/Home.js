import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react'
import './Home.css'


export default function ActionAreaCard() {
    const styles={textAlign:"start",fontWeight:"600",fontSize:"17px"};
    const s={textAlign:"start"}
    const [result,setResult]= useState([]);

    const showvideo=()=>{
      fetch("https://youtube-v3-alternative.p.rapidapi.com/trending",{
        method:"get",
        headers: {
          'X-RapidAPI-Key': '894026b4c9msh3adf9faf2418584p15519cjsn0996d882981d',
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }

      }).then(res=>res.json())
      .then(data=>{
        setResult(data.data)
        console.log(data)
      }).catch(err=>console.log(err))
}
useEffect(()=>{
  showvideo()
},[])
  return (
    <>
    <section className='Vid'>
     { 
     result.map(videos=>( 
    <Card sx={{ maxWidth: 345, marginTop:"2rem", marginLeft:"3rem", height:"20rem" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={videos.thumbnail[2].url}
        />
        <CardContent>
          <Typography sx={styles} gutterBottom variant="h6" component="div">
          {/* Srikant Vs The Kids | The Family Man | Srikant, Dhriti, Atharv | Prime Video */}
           {videos.title}
          </Typography>
          <Typography variant="body2" sx={s} color="text.secondary">
            {videos.channelTitle}
          </Typography>
          <Typography variant="body2" sx={s} color="text.secondary">
            {videos.viewCount} Views . {videos.publishedText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      )) 
     } 
    </section>
    </>
  );
}
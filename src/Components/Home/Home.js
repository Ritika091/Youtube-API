import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';


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
        const formattedData = data.data.map((video) => ({
          ...video,
          viewCount: formatYouTubeCount(video.viewCount),
        }));
        // setResult(data.data)
        setResult(formattedData);
        console.log(data)
      }).catch(err=>console.log(err))
}
useEffect(()=>{
  showvideo()
},[])
function formatYouTubeCount(count) {
  if (count < 1000) {
    return count.toString();
  } else if (count < 1000000) {
    return (count / 1000).toFixed(1) + 'K';
  } else if (count < 1000000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else {
    return (count / 1000000000).toFixed(1) + 'B';
  }
}
  return (
    <>
    <Navbar/>
    <section className='Vid'>
     { 
     result.map(videos=>( 
      <Link to={`/video/${videos.videoId}`} style={{textDecoration:"none"}}>
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
    </Link>
      )) 
     } 
    </section>
    </>
  );
}
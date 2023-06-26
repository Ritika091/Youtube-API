import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Navbar/Navbar';
import './Channel.css'
import { useEffect,useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Channel() {
  const[id,setId]=useState([])
  const {chid}=useParams()
  console.log(chid)
  const channel=()=>{
    fetch(`https://youtube-v3-alternative.p.rapidapi.com/channel?id=${chid}`,{
      method: 'GET',
	headers: {
		'X-RapidAPI-Key': '894026b4c9msh3adf9faf2418584p15519cjsn0996d882981d',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
    }).then(res=>res.json())
    .then(data=>{
      setId(data)
      console.log(data)
    }).catch(err=>console.log(err))
  }
  useEffect(()=>{
    channel()
  },[])
  if (!id.meta || !id.meta.image || !id.meta.image.banner || !id.meta.image.banner[0]) {
    return null;
  }
  const bannerUrl = id.meta.image.banner[0].url;
 
  return (
    <>
    <Navbar/>
    <div className='Channel'>
    <Box
      sx={{
        height: 200,
        backgroundImage: `url(${bannerUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover"
      }}
    />
    <div className="channelContent">
      <div className="image">
        <img className='channelimg' src={id.meta.thumbnail[0].url} alt="" />
      {/* <Avatar className='channelimg'  >"https://yt3.googleusercontent.com/ytc/AGIKgqMde3fWrEhM7mti3_2cl5WRK5MJI4p_yMNh2zcy-g=s48-c-k-c0x00ffffff-no-rj"</Avatar> */}
      </div>
      <div className="contentChannel">
      <Typography variant="h4" component="h4">{id.meta.title}</Typography>
      <Typography variant="subtitle1" component="subtitle1">@{id.meta.title} {id.meta.subscriberCount} subscribers</Typography>
      <Typography variant="subtitle2" component="subtitle2" sx={{display:"block",paddingRight:"18rem",textAlign:"justify"}}>{id.meta.description}</Typography>
      </div>
    </div>
  
    <Typography variant="h5" component="h5" sx={{marginTop:"3rem", textAlign:"center"}}>Videos</Typography>
    <div className="bottomPart">  
    {
      id.data.map(result=>(
        <Link to={`/video/${result.videoId}`} style={{textDecoration:"none"}}>
        <div className="channelCard">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={result.thumbnail[0].url}
        />
        <CardContent>
          <Typography variant="subtitle1" component="h6" sx={{fontWeight:"600"}}>
            {result.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {result.viewCount} views . {result.publishedText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </Link>
      ))
    }
    </div>
    </div>
    </>
  )
}

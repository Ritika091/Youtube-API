import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import './RelatedVideo.css'
import { Link } from 'react-router-dom';


export default function RelatedVideo() {
    const[vid,setVid]=useState([])
    const{vidid}=useParams()
    console.log(vidid)
    const related=()=>{
        fetch(`https://youtube-v3-alternative.p.rapidapi.com/related?id=${vidid}&geo=US&lang=en`,{
            method: 'GET',
	headers: {
		'X-RapidAPI-Key': '894026b4c9msh3adf9faf2418584p15519cjsn0996d882981d',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
        }).then(res=>res.json())
        .then(data=>{
            setVid(data.data)
            console.log(data)
        }).catch(err=>console.log(err))
    }
    useEffect(()=>{
      related()
    },[])
  return (
    <div className='RelatedVideo'>
        {
            vid.map(result=>(
              <Link to={`/video/${result.videoId}`} style={{textDecoration:"none"}}>
                <div className='wholeCard'>
                <div className="RelatedCard">
                <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  width="200"
                  image={result.thumbnail[0].url}
                />
                 </CardActionArea>
            </Card>
            </div>
            <div className="RelatedContent">
            <Typography  variant="subtitle" component="div">
                    {result.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {result.channelTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {result.viewCount} views . {result.publishedTimeText}
                  </Typography>
            </div>
            </div>
            </Link>
            ))
        }
       
    </div>
  )
}






import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import './Comments.css'

export default function Comments() {
    const[comment,setComment]=useState([])
    const[count,setCount]=useState()
    const {vidid}=useParams();
    useEffect(()=>{
        fetch(`https://youtube-v3-alternative.p.rapidapi.com/comments?id=${vidid}`,{
            method: 'GET',
	headers: {
		'X-RapidAPI-Key': '894026b4c9msh3adf9faf2418584p15519cjsn0996d882981d',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
        }).then(res=>res.json())
        .then(data=>{
            setComment(data.data)
            setCount(data.commentsCount)
            console.log(data);
        }).catch(err=>console.log(err))
    },[])
  return (
    <>
    <Typography variant="h5" component="h3" className='MainCount'>
    {count} Comments
 </Typography>
        {
            comment.map(com=>(
                <div className='Comments'>
                     <Avatar  src={com.authorProfileImageUrl[2].url}/>
                     <div className="commContent">
                    <div className="firstLine">
                    <Typography variant="h6" component="h6">
                    {com.authorDisplayName} 
                 </Typography>
                   <Typography variant="string" component="string" className='publishDate'>
                   {com.publishedTimeText} 
                </Typography>
                    </div>
                    <Typography variant="string" component="string" className='description'>
                   {com.textDisplay} 
                </Typography>
                <div className="like">
                <ThumbUpOutlinedIcon/> <span> {com.likesCount}</span>   
                    <ThumbDownAltOutlinedIcon/>
                </div>
                <Typography variant="subtitle1" component="h1" color="primary">
                   {com.replyCount} Replies 
                </Typography>
                </div>
                </div>
            ))
        }
</>
  )
}

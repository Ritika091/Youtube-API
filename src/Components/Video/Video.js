import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Video.css'
import Avatar from '@mui/material/Avatar';
import Comments from '../Comments/Comments'
import RelatedVideo from '../RelatedVideo/RelatedVideo'

export default function Video() {
  const[vid,setVid]=useState([])
    const{vidid}=useParams()
    console.log(vidid)
    useEffect(()=>{
        fetch(`https://youtube-v3-alternative.p.rapidapi.com/video?id=${vidid}`,{
            method:"get",
            headers: {
                'X-RapidAPI-Key': '894026b4c9msh3adf9faf2418584p15519cjsn0996d882981d',
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
              }
        }).then(res=>res.json())
        .then(data=>{
          setVid(data)
            console.log(data)
        }).catch(err=>console.log(err))
    },[vidid])
  return (
    <>
    <div className='Video'>
        <Navbar/>
        <div className="Mainpart">
          <div className="LeftPart">
        <ReactPlayer url={`https://www.youtube-nocookie.com/embed/${vid.id}`} 
        width={"880px"}
        height={"500px"}
        style={{marginLeft:"6rem", marginTop:"2rem"}}
        playing={true}
        controls
        />
        <div className="content">
          <h2>{vid.title}</h2>
          <Link to={`/channel/${vid.channelId}`} style={{textDecoration:"none", color:"black"}}>
          <h3>
          <Avatar  src={vid.thumbnail && vid.thumbnail[0] && vid.thumbnail[0].url}/>
            <span className='sptitle'>
            {vid.channelTitle}
              </span>
           </h3>
           </Link>
          <h4>{vid.viewCount} views <span>{vid.uploadDate}</span> </h4>
          <p>{vid.description}</p>
          </div> 
  
    <Comments/>
    </div>
   
    <div className="RightPart">
      <RelatedVideo/>
    </div>
    </div>
    </div>
    </>
  )
}

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Video.css'
import Avatar from '@mui/material/Avatar';

export default function Video() {
  const[vid,setVid]=useState([])
    // const videodetail=()=>{
        
    // }
    const{vidid}=useParams()
    console.log(vidid)
    useEffect(()=>{
        // videodetail()
       
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
    },[])
  return (
    <div className='Video'>
        <Navbar/>
        <ReactPlayer url={`https://www.youtube-nocookie.com/embed/${vid.id}`} 
        width={"900px"}
        height={"500px"}
        style={{marginLeft:"6rem", marginTop:"2rem"}}
        />
        <div className="content">
          <h2>{vid.title}</h2>
          <h3>
          <Avatar  src={vid.thumbnail[0].url}/>
            <span className='sptitle'>
            {vid.channelTitle}
              </span>
           </h3>
          <h4>{vid.viewCount} views <span>{vid.uploadDate}</span> </h4>
          <p>{vid.description}</p>
          </div> 
    </div>
  )
}

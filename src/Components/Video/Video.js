import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Video() {
    // const [id]=useParams("dQw4w9WgXcQ");
    // const videodetail=()=>{
        
    // }
    useEffect(()=>{
        // videodetail()
        fetch(`https://youtube-v3-alternative.p.rapidapi.com/video?id=dQw4w9WgXcQ`,{
            method:"get",
            qs: {id: 'dQw4w9WgXcQ'},
            headers: {
                'X-RapidAPI-Key': '894026b4c9msh3adf9faf2418584p15519cjsn0996d882981d',
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
              }
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        }).catch(err=>console.log(err))
    },[])
  return (
    <div className='Video'>
        <Navbar/>
        <ReactPlayer url={"https://www.youtube.com/watch?v=FHTbsZEJspU&t=2693s"} 
        width={"900px"}
        height={"500px"}
        style={{marginLeft:"6rem", marginTop:"2rem"}}
        />
    </div>
  )
}

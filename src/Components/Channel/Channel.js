import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Navbar/Navbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './Channel.css'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function Channel() {
  const[id,setId]=useState([])
  const [value, setValue] = useState(0);
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <div className="bottomPart">
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="VIDEOS" />
        <Tab label="PLAYLIST" />
      </Tabs>
    </Box>
    </div>
    </div>
    </>
  )
}

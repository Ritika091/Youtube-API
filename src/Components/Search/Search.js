import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from '../Navbar/Navbar'
import './Search.css'
import { useLocation } from 'react-router-dom';

export default function Search() {
  
  const location = useLocation();
  const { data } = useLocation()?.state || {};

 

  console.log("next page data");
 
console.log(location); // Check the location object
console.log(location?.state); 
  console.log(data);
  
  return (
    <>
    <Navbar/>
   
    <div className="SearchSec">
    <h1>{data}</h1>
       
        {/* </CardContent> */}
        </div>
    </>
  );
}








// {
        
//   vid.map(result=>(
//     <>
//     <div className="card">
//     <Card sx={{ maxWidth: 345,marginLeft:"4rem",marginTop:"4rem" }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="250"
//           width="700"
//           image={result.data.richThumbnail[0].url}
//           // alt="green iguana"
//         />
//         {/* <CardContent> */}
//         </CardActionArea>
//     </Card>
//     </div>
//     <div className="content">
//           <Typography gutterBottom variant="h5" component="div">
//             {result.data.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//            {result.data.viewCount}.{result.data.publishedText}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//            {result.data.channelTitle}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//            {result.data.description}
//           </Typography>
//           </div>
//           </>
//   ))
// }
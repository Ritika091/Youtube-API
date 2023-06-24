// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Navbar from '../Navbar/Navbar'
// import './Search.css'
// import { useLocation } from 'react-router-dom';

// export default function Search() {
//   const location = useLocation();
//   const vid = location.state?.data || [];

//   return (
//     <>
//     <Navbar/>
   
//     <div className="SearchSec">
//     {vid &&
//           vid.map((result) => (
//           <>
//           <div className="card">
//           <Card sx={{ maxWidth: 345,marginLeft:"4rem",marginTop:"4rem" }}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="250"
//                 width="700"
//                 image={result.data.richThumbnail[0].url}
//               />
            
//               </CardActionArea>
//           </Card>
//           </div>
//           <div className="content">
//                 <Typography gutterBottom variant="h5" component="div">
//                   {result.data.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                  {result.data.viewCount}.{result.data.publishedText}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                  {result.data.channelTitle}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                  {result.data.description}
//                 </Typography>
//                 </div>
//                 </>
//         ))
//       }
       
      
//         </div>
//     </>
//   );
// }








import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import './Search.css';
import {Link, useLocation } from 'react-router-dom';

export default function Search() {
  const location = useLocation();
  const vid = location.state && location.state.data ? location.state.data : [];
  console.log("data")
  console.log(vid)
  console.log(vid.data.length)
  return (
    <>
      <Navbar />

      <div className="SearchSec">
      {vid.data.length>0 ? (
         vid.data.map((result) => (
            <React.Fragment key={result.vid}>
              <Link to={`/video/${result.videoId}`}   style={{textDecoration:"none" , color:"black"}}>
              <div className="wholecard">
              <div className="card">
                <Card  key={result.vid} sx={{ maxWidth: 345, marginLeft: '4rem', marginTop: '4rem' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      width="300"
                      image={result.thumbnail[0].url}
                      alt="Video Thumbnail"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className="content">
                <Typography gutterBottom variant="h5" component="div">
                  {result.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.viewCount}.{result.publishedText}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.channelTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.description}
                </Typography>
              </div>
              </div>
              </Link>
            </React.Fragment>
          ))
        ) : (
          <Typography variant="body1">No results found.</Typography>
        )}
      </div>
    </>
  );
}

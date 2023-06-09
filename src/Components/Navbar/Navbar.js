import React from 'react'
import './Navbar.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className="icon">
            <YouTubeIcon color='error' fontSize="large"/>
            <h2>YouTube</h2>
        </div>
        <div className="search">
            <input type="text"  placeholder='Search' />
          <button className='searchicon'><SearchIcon /></button>  
        </div>
    </div>
  )
}

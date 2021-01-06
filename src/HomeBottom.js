import React from 'react'

import "./HomeBottom.css";

import BookmarkIcon from '@material-ui/icons/Bookmark';

import Timer from '@material-ui/icons/Timer';
import { LocationOn } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function HomeBottom() {
    return (
        <div className="homebottom">
          <div className="link">
          <Timer style={{fontSize:90 , color:"palevioletred"}}/>
          <div className="left">
              <h4>Opening Times</h4>
              <p> <b>8:00am - 6:30pm</b> Monday - Friday </p>
          </div>
          </div>
          <div className="link">
          <LocationOn style={{fontSize:90 , color:"palevioletred"}}/>
          <div className="left">
              <h4>Our Location</h4>
              <p>124th Avenue Wall Street</p>
              <p>New York , USA.</p>
          </div>
          </div>
          <div className="link">
          <BookmarkIcon style={{fontSize:90 , color:"palevioletred"}}/>
          <div className="left">
              <h4>Book Now</h4>
              <p><Link>Book online</Link> or call 000-0000-0101</p>
          </div>
          </div>
              
        </div>
    )
}

export default HomeBottom

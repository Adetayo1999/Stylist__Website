import React from 'react'
import "./HomePage.css";
import {Link} from "react-router-dom";
import HomeBottom from './HomeBottom';
import MediaLinks from './MediaLinks';

function HomePage() {
    return (
        <div className="homepage">
            <div className="header">
                <div className="header__left">
                <ul>
                  <li className="active"><Link to="/">Home</Link></li>
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Contact</Link></li>                  
                </ul>
                </div>
                <div className="header__center">
                 <Link to="/" className="logo"> Mercury <span className="sal">Salon</span></Link>
                </div>
                <div className="header__right">
                <ul>
                  <li><Link to="/">Gallery</Link></li>
                  <li><Link to="/">Blog</Link></li>
                  <li className="booking"><Link to="/">Book</Link></li>                  
                </ul>
                </div>
            </div>
            <div className="body">
                <h1> <span className="pre">premium</span> appointments!</h1>
                <p>Appointment 6am to 8am</p>
                <p>To Book An Appointment Please Call The Salon's directly and ask form premium appointments availabilty</p>
            </div>
              <MediaLinks />
              <HomeBottom />
         
        </div>
    )
}

export default HomePage

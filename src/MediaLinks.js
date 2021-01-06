import { Facebook, Instagram, Telegram, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'
import {Link} from "react-router-dom";
import "./MediaLinks.css";
function MediaLinks() {
    return (
        <div className="media">
            <div className="media__link">
                <Link><Facebook fontSize="large"/></Link>
            </div>
            <div className="media__link">
                <Link>
                <Instagram fontSize="large"/>
                </Link>
            </div>
            <div className="media__link">
                <Link>
                <WhatsApp fontSize="large"/>
                </Link>
            </div>
            <div className="media__link">
                <Link>
                <Telegram fontSize="large"/>
                </Link>
            </div>
            <div className="media__link">
                <Link>
                <Twitter fontSize="large"/>
                </Link>
            </div>
        </div>
    )
}

export default MediaLinks

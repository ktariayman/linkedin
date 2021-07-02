

import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import logo from './logo.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import WorkIcon from '@material-ui/icons/Work';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//  import pdp from './mypic_ctm_icon.ico';
 import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Avatar from '@material-ui/core/avatar' 

function Header (){
    return(
        <div className="Header">

            <div className="headerleft" >
                    <img src={logo} alt=""/>               
                    <div className="search">
                      <SearchIcon />
                      <input type="text" placeholder="Search"/>
                    </div>
            </div>

           <div className="headerright">
                <HeaderOption  Icon={HomeIcon} title="home" />   
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" /> 
                <HeaderOption Icon={WorkIcon} title="Job" />   
                <HeaderOption Icon={ChatIcon} title="Messages" />   
                <HeaderOption Icon={NotificationsIcon} title="Notification" />   
                <HeaderOption Icon={Avatar}  title="Me" />   
            </div>
      </div>

        );
    }
    export default Header;

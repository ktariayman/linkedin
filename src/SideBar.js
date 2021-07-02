import React from 'react';
import Avatar from '@material-ui/core/avatar' 
import "./SideBar.css"

function SideBar() {
   
    const skills =(text)  =>(
        <div className="sidebar__skills">   
            <span className="sidebar__hashtag" >#</span>
            <p>{text}</p>
        </div>
    );
    return (
        <div className="sidebar">
            {/* SIDE_BAR_TOP */}
            <div className="sidebartop">
                <img src="https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png" alt=""></img>
                <Avatar className="sidebar__avatar" />
                <h2>Ktari Ayman</h2>
                <h4>KtariAyman@gmail.com</h4>
            </div>
            {/* SID_BAR_STATS */}

            <div className="sidebar__statiques">

                <div className="sidebar__statique">
                    <p>Who view you?? <span className="sidebar__statique_numbers">9999</span></p>
                </div>

                <div className="sidebar__statique">    
                <p>WView on post <span className="sidebar__statique_numbers">9999</span></p>

                    
                </div>

            </div>
            {/* SIDE_BAR_BOTTOM */}

            <div className="sidebarbottom">
                <p>Recent</p>
                {skills("reactjs")}
                {skills("Nodejs")}
                {skills("python")}
                {skills("programmer")}
                {skills("developer")}
            </div>
        </div>
    )
}

export default SideBar

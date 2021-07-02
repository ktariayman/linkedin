import React from 'react';
import "./HeaderOption.css";
import Avatar from '@material-ui/core/avatar' ;




function HeaderOption( {Avatar , Icon , title} ) {
    return (
        <div className="HeaderOption">
            {Icon && <Icon className="headerOption__icon"/>} 

            <h3 className="headerOptionTitle">{title}</h3>
            {Avatar && <Avatar className="headerOption__avatar"/>} 

        </div>
    )
}

export default HeaderOption;

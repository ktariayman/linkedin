import React from 'react';
import "./InputOptions.css";




function InputOptions( {Icon , title} ) {
    return (
        <div className="inputOption">
            {Icon && <Icon className="inputOption__icon"/>} 

            <h3 className="inputOptionTitle">{title}</h3>

        </div>
    )
}

export default InputOptions;

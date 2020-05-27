import React from 'react';


const styleLoc = {
    color: "white",
    padding: "10px",
    cursor: "pointer",
}

const styleName = {
    padding: "0 5px",
    color: "white",
    fontsize: "20px"
}

const location = (props) => (
    <div style={styleLoc}>
        <div style={styleName}>{props.cityName}, {props.provName}, {props.countryName} </div>
    </div>
);

export default location;
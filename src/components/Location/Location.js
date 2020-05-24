import React from 'react';


const styleLoc = {
    color: "white",
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    flexDirectioin: "row",
}

const styleName = {
    padding: "0 5px",
    flex: "1",
    color: "#004e92",
}

const location = (props) => (
    <div style={styleLoc}>
        <div style={styleName}>{props.name}</div>
    </div>
);

export default location;
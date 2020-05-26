import React from 'react';


const styleLoc = {
    color: "white",
    padding: "10px",
    cursor: "pointer",
    textalign: "center"
}

const styleName = {
    padding: "0 5px",
    flex: "1",
    color: "white",
    textalign: "center",
    textshadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    fontsize: "20px"

}

const location = (props) => (
    <div style={styleLoc}>
        <div style={styleName}>{props.locName}</div>
    </div>
);

export default location;
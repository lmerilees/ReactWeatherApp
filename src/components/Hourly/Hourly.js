import React from 'react';


const styleHourly = {
    backgroundColor: "white",
    border: "solid 1px gray",
    padding: "6px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    fontFamily: "Acme",
    alignItems: "center",
}

const styleTime = {
    color: "#004e92",
    flex: "1",
    marginLeft: "10px"

}

const styleCond = {
    color: "black",
    fontsize: 3,
    flex: "1"
}

const styleImg = { 
    flex: "1"
}

const styleTemp = {
    color: "dark grey",
    fontsize: 8,
    flex: "1"
}

const hourly = (props) => (
    <div style={styleHourly}>
        <div style={styleTime}>
            {
            props.time
        }</div>
        <div style={styleImg}>
            {
            props.img
        }</div>
        <div style={styleTemp}>
            {
            props.temp
        }</div>
        <div style={styleCond}>
            {
            props.cond
        }</div>
    </div>
);

export default hourly;



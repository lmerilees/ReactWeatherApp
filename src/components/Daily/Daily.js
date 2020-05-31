import React from 'react';


const styleDaily = {
    backgroundColor: "white",
    border: "solid 1px gray",
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    fontSize: 30,
    fontFamily: "Acme"
}

const styleName = {
    padding: "10px",
    flex: "1.2",
    color: "#004e92"
}

const styleDate = {
    color: "gray",
    fontSize: 40,
    flex: "1"
}

const styleImg = { 
    flex: "1"
}

const styleHigh = {
    color: "dark grey",
    fontsize: 12,
    padding: "10px",
    flex: "0"
}

const styleLow = {
    color: "grey",
    fontsize: 8,
    padding: "10px",
    flex: "1"
}

const styleCond = {
    padding: "10px",
    color: "black",
    fontsize: 6,
    flex: "1.8"
}

const daily = (props) => (
    <div style={styleDaily}>
        <div style={styleName}>
            {
            props.name
        }</div>
        <div style={styleDate}>
            {
            props.date
        }</div>
        <div style={styleImg}>
            {
            props.img
        }</div>
        <div style={styleHigh}>
            {
            props.high
        }</div>
        <div style={styleLow}>
            {
            props.low
        }</div>
        <div style={styleCond}>
            {
            props.cond
        }</div>
    </div>
);

export default daily;

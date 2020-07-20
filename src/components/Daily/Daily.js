import React from 'react';


const styleDaily = {
    backgroundColor: "white",
    border: "solid 1px gray",
    padding: "6px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    fontFamily: "Acme",
    alignItems: "center"
}

const styleName = {
    padding: "6px",
    flex: "1.4",
    color: "#004e92"
}

const styleDate = {
    color: "gray",
    flex: "1"
}

const styleImg = { 
    flex: "1"
}

const styleHigh = {
    color: "dark grey",
    fontsize: 8,
    flex: "0.5"
}

const styleLow = {
    color: "grey",
    fontsize: 6,
    flex: "1"
}

const styleCond = {
    color: "black",
    fontsize: 3,
    flex: "1"
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

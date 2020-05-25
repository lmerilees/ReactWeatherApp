import React from 'react';


const styleDaily = {
    backgroundColor: "white",
    border: "solid 1px gray",
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row"
}

const styleName = {
    padding: "0 5px",
    flex: "1",
    color: "#004e92"
}

const styleDate = {
    color: "gray",
    padding: "0 10px",
    size: 6
}

const styleImg = {
    padding: "0 5px"
}

const styleHigh = {
    color: "dark grey",
    size: 12,
    padding: "0 5px"
}

const styleLow = {
    color: "grey",
    size: 8,
    padding: "0 5px"
}

const styleCond = {
    padding: "0 5px",
    color: "black",
    size: 6

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

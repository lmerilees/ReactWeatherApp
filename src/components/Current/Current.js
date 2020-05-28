import React from 'react';

const styleWrap = {
    
}

const styleName = {
    textAlign: "center",
    color: "white",
    fontSize: "40px"
}

const styleTemp = {
    textAlign: "center",
    fontSize: "30px",
    color: "white"
}

const styleCond = {
    color: "white",
    textAlign: "center",
    fontSize: "30px"
}

const styleFeels = {
    color: "light gray",
    textAlign: "center",
    fontSize: "15px"
}

const Current = (props) => (
    <div style={styleWrap}>
        <div>
            <div style={styleName}>{props.cityName}</div>
        </div>
        <div>
            <div style={styleTemp}>{props.temp}</div>
        </div>
        <div>
            <div style={styleCond}>{props.cond}</div>
        </div>
        <div>
            <div style={styleFeels}>{props.feelsLike} | {props.wind} | {props.visibility} | {props.barometer} | {props.humidity}</div>
        </div>
    </div>
);

export default Current;
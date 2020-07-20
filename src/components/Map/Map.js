import React from 'react';
import backgroundImage from 'C:/Users/city_/weather-app2/src/Images/backgroundclear.jpg'

const mapStyles = {
    width: '70%',
    height: '70%',
};

const bgStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(' + backgroundImage + ')'
}

function map() {
    return (
        <div style={bgStyles}>
            <div style={mapStyles}>
            </div>
        </div>
    )
}

export default map;

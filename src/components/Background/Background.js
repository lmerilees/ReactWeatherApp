import React from 'react';

const stylesBG = {
    width: '100%',
    height: '100%',
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}


const background = (props) => (
    <div style={stylesBG}>
        {props.backgroundImage}
    </div>
);

export default background;

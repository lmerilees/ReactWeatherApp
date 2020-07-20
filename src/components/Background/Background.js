import React from 'react';

const background = (props) => (
    <div style={{
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url( '+ props.backgroundImage + ')'}}>

        <div>
            <main>
                {props.children} 
            </main>
        </div>
    </div>
);


export default background;

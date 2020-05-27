import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import Daily from './containers/Daily/Daily'
//import Location from './containers/Location/Location'
import Current from './containers/Current/Current'
import background1 from '../src/Images/background1.jpg'

const styleBG = {
    backgroundImage: 'url(' + background1 + ')',
    backgroundSize: "cover",
    height: "100vh"
}

function App() {
    return (
        <div style={styleBG}>
            <Layout>
                <Current/>
                <Daily/>
            </Layout>
        </div>
    );
}

export default App;

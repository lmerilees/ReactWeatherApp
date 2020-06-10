import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import Daily from './containers/Daily/Daily'
import Toolbar from './containers/Toolbar/Toolbar'
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
                <Toolbar/>
                <Current/>
                <br></br>
                <Daily/>
            </Layout>
        </div>
    );
}

export default App;

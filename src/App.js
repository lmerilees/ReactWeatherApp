import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import Daily from './containers/Daily/Daily'
import Locations from './containers/Location/Location'
import background1 from '../src/Images/background1.jpg'

const styleBG = {
  backgroundImage: 'url('+background1+')',
  backgroundSize: "cover",
  height: "100vh",
}

function App() {
  return (
    <div style={styleBG}>
      <Layout>
        <Locations />
      </Layout>
      <Daily />
    </div> 
  );
}

export default App;

import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import Daily from './containers/Daily/Daily'
import background1 from '../src/Images/background1.jpg'

const styleBG = {
  backgroundImage: 'url('+background1+')',
  backgroundSize: "cover",
}

function App() {
  return (
    <div style={styleBG}>
      <Layout>
        <h1>Weather App</h1>
        <h2>Saskatoon</h2>
        <Daily />
      </Layout>
    </div> 
  );
}

export default App;

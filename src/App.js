import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import Daily from './containers/Daily/Daily'

function App() {
  return (
    <div>
      <Layout>
        <h1>Weather App</h1>
        <h2>Saskatoon</h2>
        <Daily />
      </Layout>
    </div> 
  );
}

export default App;

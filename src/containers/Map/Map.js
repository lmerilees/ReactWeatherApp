import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'
import {Container, Row, Col} from 'react-bootstrap';
let index = 0;

const mapStyles = {
    width: '512px',
    height: '512px',
    position: 'absolute',
    zIndex: 0,
};

// overlay the radar images over the map
const radarStyles = {
    width: '512px',
    height: '512px',
    position: "relative",
    zIndex: 1
}

const timeStyles = {
    color: "white"
}

class MapContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            errorMessage: null,
            lat: 52.12,
            lon: -106.67,
            url: null,
            time: null,
        }        
    }

    // this method is called when the component is rendered for the first time
    componentDidMount() { 
       // determine user location
       this.getLocation();
    }

    componentWillUnmount() {
        // we need to clear the timer when the component unmounts to prevent memory leaks
        clearInterval(this.interval);
    }

    /**
     * Get geolocation of device and store latitude and longitude in states
     */
    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
            // if successful, proceed to make API request
            this.getRadar();
        }, (error) => this.setState({errorMessage: error}))
    }

    /**
    * Request radar images from RainViewer API
    */
    getRadar() {
        // RainViewer uses unix time stamp in UTC so we need to do some converting
        let cur = parseInt(Date.now().toString().substring(0, 10))
        let img10 = cur - (cur % 600) - 600
        let img9 = cur - (cur % 600) - 1200
        let img8 = cur - (cur % 600) - 1800
        let img7 = cur - (cur % 600) - 2400
        let img6 = cur - (cur % 600) - 3000
        let img5 = cur - (cur % 600) - 3600
        let img4 = cur - (cur % 600) - 4200
        let img3 = cur - (cur % 600) - 4800
        let img2 = cur - (cur % 600) - 5400
        let img1 = cur - (cur % 600) - 6000

        let date1 = new Date(img1 * 1000).toString()
        let date2 = new Date(img2 * 1000).toString()
        let date3 = new Date(img3 * 1000).toString()
        let date4 = new Date(img4 * 1000).toString()
        let date5 = new Date(img5 * 1000).toString()
        let date6 = new Date(img6 * 1000).toString()
        let date7 = new Date(img7 * 1000).toString()
        let date8 = new Date(img8 * 1000).toString()
        let date9 = new Date(img9 * 1000).toString()
        let date10 = new Date(img10 * 1000).toString()

        // grab last 10 radar images (100 minutes or 1 hour and 40 minutes)
        let url10 = "https://tilecache.rainviewer.com/v2/radar/" + img10 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        let url9 = "https://tilecache.rainviewer.com/v2/radar/" + img9 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        let url8 = "https://tilecache.rainviewer.com/v2/radar/" + img8 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        let url7 = "https://tilecache.rainviewer.com/v2/radar/" + img7 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        let url6 = "https://tilecache.rainviewer.com/v2/radar/" + img6 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        let url5 = "https://tilecache.rainviewer.com/v2/radar/" + img5 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        let url4 = "https://tilecache.rainviewer.com/v2/radar/" + img4 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        let url3 = "https://tilecache.rainviewer.com/v2/radar/" + img3 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        let url2 = "https://tilecache.rainviewer.com/v2/radar/" + img2 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        let url1 = "https://tilecache.rainviewer.com/v2/radar/" + img1 + "/512/6/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png"
        
        let urls = [url1, url2, url3, url4, url5, url6, url7, url8, url9, url10]
        let times = [date1, date2, date3, date4, date5, date6, date7, date8, date9, date10]


        // update url state every x seconds
        this.interval = setInterval(() => this.setState({url: urls[index], time: times[index]}, this.nextImage()), 500)    
    }

    // this function will loop a counter from 0-9 to act as our index counter
    nextImage() {
        index+=1;
        if(index > 9){
            index = 0;
        }
    }

    render() {
        return (
            <Container fluid="xl">
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Map
                        google={this.props.google}
                        style={mapStyles}
                        initialCenter={{
                                lat: this.state.lat,
                                lng: this.state.lon
                            }}
                        zoom={7}
                        />
                        <img src={this.state.url} style={radarStyles} alt={""}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* find a better way to do this or put something here */}
                        <div style={timeStyles}>{this.state.time}</div>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAorJgq9XDIR_SL9bZbsFsKaNjAiCZ_tyI'
})(MapContainer);
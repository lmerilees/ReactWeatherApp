import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'
import {Container, Row, Col} from 'react-bootstrap';

const mapStyles = {
    width: '75%',
    height: '75%',
};

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
        // determine user location and make API request
        this.getLocation();
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
        let round = cur - (cur % 600) - 600

        fetch("https://tilecache.rainviewer.com/v2/radar/" + round + "/512/5/" + this.state.lat.toFixed(2) + "/" + this.state.lon.toFixed(2) + "/5/0_0.png",)
        .then(async response => {
            const data = await response;
            // check if reponse is an error
            if (!response.ok) { // get error message or default reponse
                const err = (data && data.message) || response.status;
                return Promise.reject(err);
            }

            this.setState({url: data.url.toString()})
        }).catch(err => {
            this.setState({errorMessage: err});
            console.error("An error occured", err);
        });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Map
                        google={this.props.google}
                        style={mapStyles}
                        initialCenter={{
                                lat: this.state.lat,
                                lng: this.state.lon
                            }}
                        zoom={6}
                        />
                    </Col>
                    <Col>
                        <img src={this.state.url} alt="new"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAorJgq9XDIR_SL9bZbsFsKaNjAiCZ_tyI'
})(MapContainer);
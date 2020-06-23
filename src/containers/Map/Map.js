import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'
import {Container} from 'react-bootstrap';

const mapStyles = {
    position: 'relative',
    width: '90%',
    height: '90%'
};

class MapContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            errorMessage: null,
            lat: null,
            lon: null
        }        
    }

    render() {
        return (
            <Container fluid>
                <Map
                    google={this.props.google}
                    style={mapStyles}
                    initialCenter={{
                            lat: 52.12,
                            lng: -106.67
                        }}
                    zoom={12}
                />
            </Container>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAorJgq9XDIR_SL9bZbsFsKaNjAiCZ_tyI'
})(MapContainer);
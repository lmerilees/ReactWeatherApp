import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'
import {Container, Row, Col} from 'react-bootstrap';

const mapStyles = {
    width: '100%',
    height: '400px',
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
            <Container>
                <Row>
                    <Col>
                        <p>Testeeboi</p>
                        <Map
                            google={this.props.google}
                            style={mapStyles}
                            initialCenter={{
                                lat: 52.12,
                                lng: -106.67
                            }}
                            zoom={12}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAorJgq9XDIR_SL9bZbsFsKaNjAiCZ_tyI'
})(MapContainer);
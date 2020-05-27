import React, {Component} from 'react';
import Location from '../../components/Location/Location'
import {Container} from 'react-bootstrap';

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null,
            lat: null,
            lon: null,
            locName: null
        }
    }

    /**
     * Get geolocation of device and store latitude and longitude in states
     */
    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
            // if successful, proceed to make API request
            this.getLocationName();
        }, (error) => this.setState({errorMessage: error}))
    }


    /**
    * Get location name from OpenWeatherMap API (there is probably a better way to do this)
    */
   getLocationName() { // request 5 day forecast from Open Weather Map API
    fetch("https://api.opencagedata.com/geocode/v1/json?key=4190527b6b8b4b4fac1b6bb1d7c3309f&q=" + this.state.lat + "%2C" + this.state.lon + "&pretty=1", {
        "method": "GET",
    }).then(async response => {
        const data = await response.json();
        // check if reponse is an error
        if (!response.ok) { // get error message or default reponse
            const err = (data && data.message) || response.status;
            return Promise.reject(err);
        }
        console.log(data)

        // otherwise set states
        this.setState({
            cityName: data.results[0].components.county,
            provName: data.results[0].components.state_code,
            countryName: data.results[0].components.country,
            countryCode: data.results[0].components.country_code
        })

        this.getCurrent()

    }).catch(err => {
        this.setState({errorMessage: err});
        console.error("An error occured", err);
    });
}

    // this method is called when the component is rendered for the first time
    componentDidMount() {
        this.getLocation();
    }


    // change to locName="{locName} when you don't feel like wasting API calls or figure out a better way to do this
    render() {
        //const {locName} = this.state;
        return (
            <Container>

                <Location locName="Saskatoon"/>
            </Container>
        );
    }
}

export default Locations;

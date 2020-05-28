import React, {Component} from 'react';
import Current from '../../components/Current/Current'
import {Container, Row, Col} from 'react-bootstrap';

class Currents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null,
            lat: null,
            lon: null,
            cityName: null,
            temp: null,
            feelsLike: null,
            cond: null,
            wind: null,
            visibility: null,
            barometer: null,
            humidity: null
        }
    }

    /**
     * Get geolocation of device and store latitude and longitude in states
     */
    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({lat: position.coords.latitude, lon: position.coords.longitude});

            // if successful, proceed to get 
            this.getLocationName();
        }, (error) => this.setState({errorMessage: error}))
    }


    /**
    * Get location name from opencagedata API
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
            
            // otherwise set states
            this.setState({
                cityName: data.results[0].components.county + ", " + data.results[0].components.state_code,
            })

            this.getCurrent()

        }).catch(err => {
            this.setState({errorMessage: err});
            console.error("An error occured", err);
        });
    }

    /**
     * Get current weather for device's location from OpenWeatherMap API
     */
    getCurrent() {
        let API = "648f721923c5e9d95de6fc8b69c904a2"
        fetch("http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + this.state.lat + "&lon=" + this.state.lon + "&appid=" + API,)
        .then(async response => {
            const data = await response.json();
            // check if reponse is an error
            if (!response.ok) { // get error message or default reponse
                const err = (data && data.message) || response.status;
                return Promise.reject(err);
            }
            console.log(data)
            // otherwise set states
            this.setState({
                temp: Math.round(data.main.temp) + "   C",
                feelsLike: "Feels like " + Math.round(data.main.feels_like) + "  C",
                cond: data.weather[0].description,
                wind: "Wind " + data.wind.speed,
                visibility: "Visibility " + data.visibility,
                barometer: "Pressure " + data.main.pressure,
                humidity: "Humidity " + data.main.humidity
            })

        }).catch(err => {
            this.setState({errorMessage: err});
            console.error("An error occured", err);
        });
    }

    // this method is called when the component is rendered for the first time
    componentDidMount() {
        this.getLocation();
    }


    render() { 
        const {cityName, temp, feelsLike, cond, wind, visibility, barometer, humidity} = this.state;
        return (
            <Container>
                <Row>
                    <Col><Current cityName={cityName} temp={temp} cond={cond} feelsLike={feelsLike} wind={wind} visibility={visibility} barometer={barometer} humidity={humidity}/></Col>
                </Row>
            </Container>
        );
    }
}

export default Currents;

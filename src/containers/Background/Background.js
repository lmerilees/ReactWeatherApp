import React, { Component } from 'react';
import Background from '../../components/Background/Background'
import { Container, Row, Col } from 'react-bootstrap';
import backgroundScattered from 'C:/Users/city_/weather-app2/src/Images/backgroundScattered.jpg'
import backgroundCloudy from 'C:/Users/city_/weather-app2/src/Images/backgroundcloudy.jpg'
import backgroundRain from 'C:/Users/city_/weather-app2/src/Images/backgroundrain.jpg'
import backgroundThunderstorm from 'C:/Users/city_/weather-app2/src/Images/backgroundthunderstorm.jpg'
import backgroundClear from 'C:/Users/city_/weather-app2/src/Images/backgroundclear.jpg'
import backgroundOvercast from 'C:/Users/city_/weather-app2/src/Images/backgroundovercast.jpg'
import backgroundSnow from 'C:/Users/city_/weather-app2/src/Images/backgroundsnow.jpg'

import Daily from 'C:/Users/city_/weather-app2/src/containers/Daily/Daily'
import Current from 'C:/Users/city_/weather-app2/src/containers/Current/Current'
import Hourly from 'C:/Users/city_/weather-app2/src/containers/Hourly/Hourly'

class Backgrounds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null,
            backgroundImage: null
        }
    }

    /**
     * Get geolocation of device and store latitude and longitude in states
     */
    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
            // if successful, proceed to make API request
            this.getCurrent();
        }, (error) => this.setState({errorMessage: error}))
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

            let cond =  data.weather[0].description;

            // determine which background to display
            switch(cond) {
                case "clear": this.setState({backgroundImage: backgroundClear});
                    break;
                case "broken clouds": this.setState({backgroundImage: backgroundCloudy});
                    break;
                case "scattered clouds": this.setState({backgroundImage: backgroundScattered});
                    break;
                case "overcast clouds": this.setState({backgroundImage: backgroundOvercast});
                    break;
                case "light rain": this.setState({backgroundImage: backgroundRain});
                    break;
                case "rain": this.setState({backgroundImage: backgroundRain});
                    break;
                case "light intensity shower rain": this.setState({backgroundImage: backgroundRain});
                    break;
                case "thunderstorm": this.setState({backgroundImage: backgroundThunderstorm});
                    break;
                case "thunderstorm with rain": this.setState({backgroundImage: backgroundThunderstorm});
                    break;
                case "snow": this.setState({backgroundImage: backgroundSnow});
                    break;
                default:
                    break;
            }
 
        }).catch(err => {
            this.setState({errorMessage: err});
            console.error("An error occured", err);
        });
    }

// this method is called when the component is rendered for the first time
componentDidMount() { // determine user location and make API request
    this.getLocation();
}


render() {
    return (
            <Background backgroundImage={this.state.backgroundImage}>
                <Container fluid>
                    <Row>
                        <Col>
                            <Current/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Daily/>
                        </Col>
                        <Col>
                            <Hourly/>
                        </Col>
                    </Row>
                </Container>
            </Background>
        );
    }
}

export default Backgrounds;
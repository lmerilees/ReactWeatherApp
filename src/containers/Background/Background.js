import React, { Component } from 'react';
import Background from '../../components/Background/Background'
import { Container, Row, Col } from 'react-bootstrap';    
import background1 from 'C:/Users/city_/weather-app2/src/Images/background1.jpg'

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

            console.log(data)

            let cond =  data.weather[0].description;
            console.log(cond)

            // determine which background to display
            switch (this.state.cond) {
                case "clear": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
                    break;
                case "broken clouds": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
                    break;
                case "scattered clouds": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
                    break;
                case "few clouds": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
                    break;
                case "overcast clouds": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
                    break;
                case "light rain": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
                    break;
                case "rain": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
                    break;
                case "light intensity shower rain": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
                    break;
                case "thunderstorm": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
                    break;
                case "snow": this.setState({backgroundImage: <img src={background1} alt="img2"></img>});
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
    console.log("render")
    return (
        <Container>
            <Row>
                <Col>
                    <Background backgroundImage={this.state.backgroundImage}/>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Backgrounds;
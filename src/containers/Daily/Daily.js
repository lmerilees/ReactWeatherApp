import React, {Component} from 'react';
import Daily from '../../components/Daily/Daily'
import {Container} from 'react-bootstrap';

class Dailies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null,
            lat: null,
            lon: null,
            day1: null,
            day2: null,
            day3: null,
            day4: null,
            day5: null,
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            high1: null,
            high2: null,
            high3: null,
            high4: null,
            high5: null,
            low1: null,
            low2: null,
            low3: null,
            low4: null,
            low5: null,
            cond1: null,
            cond2: null,
            cond3: null,
            cond4: null,
            cond5: null
        }
    }

    /**
     * Get geolocation of device and store latitude and longitude in states
     */
    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
            // if successful, proceed to make API request
            this.getDaily();
        }, (error) => this.setState({errorMessage: error}))
    }

    /**
    * Get 5 day weather forecart from OpenWeatherMap API
    */
    getDaily() { // request 5 day forecast from Open Weather Map API
        fetch('https://community-open-weather-map.p.rapidapi.com/forecast?units=metric&lat=' + this.state.lat.toString() + '&lon=' + this.state.lon.toString(), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "0f7862f8efmsh15e592da62b201dp198c03jsn53244766f824"
            }
        }).then(async response => {
            const data = await response.json();

            // check if reponse is an error
            if (!response.ok) { // get error message or default reponse
                const err = (data && data.message) || response.status;
                return Promise.reject(err);
            }

            console.log(data)

            // determine day of week and date of our dataset
            this.getDayName(data);

            // determine high and low of each day (this can be done easier with premium tier of OpenWeatherMap api :( )
            this.getHighLow(data);

            // set remaining states (that required no manipulation)
            this.setState({
                cond1: data.list[4].weather[0].main,
                cond2: data.list[12].weather[0].main,
                cond3: data.list[20].weather[0].main,
                cond4: data.list[28].weather[0].main,
                cond5: data.list[36].weather[0].main
            })
        }).catch(err => {
            this.setState({errorMessage: err});
            console.error("An error occured", err);
        });


    }

    /**
     * Get day name (e.g. Monday) from each day in our dataset
     * @param {JSON} data 
     */
    getDayName(data) { // convert date string into date object
        let d1 = new Date(data.list[4].dt_txt)
        let d2 = new Date(data.list[12].dt_txt)
        let d3 = new Date(data.list[20].dt_txt)
        let d4 = new Date(data.list[28].dt_txt)
        let d5 = new Date(data.list[36].dt_txt)
        let dArray = [
            d1,
            d2,
            d3,
            d4,
            d5
        ]

        // determine day names
        for (var i = 0; i <= 4; i++) {
            switch (dArray[i].getDay()) {
                case 0: dArray[i] = "Sunday";
                    break;
                case 1: dArray[i] = "Monday";
                    break;
                case 2: dArray[i] = "Tuesday";
                    break;
                case 3: dArray[i] = "Wednesday";
                    break;
                case 4: dArray[i] = "Thursday";
                    break;
                case 5: dArray[i] = "Friday"
                    break;
                case 6: dArray[i] = "Saturday"
                    break;
                default:
                    break;
            }
        }

        this.setState({
            day1: dArray[0],
            day2: dArray[1],
            day3: dArray[2],
            day4: dArray[3],
            day5: dArray[4],
            date1: d1.getDate(),
            date2: d2.getDate(),
            date3: d3.getDate(),
            date4: d4.getDate(),
            date5: d5.getDate()
        })
    }


    /** 
     * Get high/low for each day in our dataset (5 days currently)
     * @param {*} data: JSON object with our weather data from API
     */
    getHighLow(data) {

        let max = -100;
        let min = 100;
        for (var i = 0; i < 8; i++) {
            if (data.list[i].main.temp > max) {
                max = data.list[i].main.temp;
                this.setState({high1: Math.round(max)});
            }
            if (data.list[i].main.temp < min) {
                min = data.list[i].main.temp;
                this.setState({low1: Math.round(min)});
            }
        }
        max = -100;
        min = 100;
        for (i = 8; i < 16; i++) {
            if (data.list[i].main.temp > max) {
                max = data.list[i].main.temp;
                this.setState({high2: Math.round(max)});
            }
            if (data.list[i].main.temp < min) {
                min = data.list[i].main.temp;
                this.setState({low2: Math.round(min)});
            }
        }
        max = -100;
        min = 100;
        for (i = 16; i < 24; i++) {
            if (data.list[i].main.temp > max) {
                max = data.list[i].main.temp;
                this.setState({high3: Math.round(max)});
            }
            if (data.list[i].main.temp < min) {
                min = data.list[i].main.temp;
                this.setState({low3: Math.round(min)});
            }
        }
        max = -100;
        min = 100;
        for (i = 24; i < 32; i++) {
            if (data.list[i].main.temp > max) {
                max = data.list[i].main.temp;
                this.setState({high4: Math.round(max)});
            }
            if (data.list[i].main.temp < min) {
                min = data.list[i].main.temp;
                this.setState({low4: Math.round(min)});
            }
        }
        max = -100;
        min = 100;
        for (i = 32; i < 40; i++) {
            if (data.list[i].main.temp > max) {
                max = data.list[i].main.temp;
                this.setState({high5: Math.round(max)});
            }
            if (data.list[i].main.temp < min) {
                min = data.list[i].main.temp;
                this.setState({low5: Math.round(min)});
            }
        }
    }


    // this method is called when the component is rendered for the first time
    componentDidMount() { // determine user location and make API request
        this.getLocation();

    }

    render() {
        const {
            cond1,
            cond2,
            cond3,
            cond4,
            cond5,
            day1,
            day2,
            day3,
            day4,
            day5,
            date1,
            date2,
            date3,
            date4,
            date5,
            high1,
            high2,
            high3,
            high4,
            high5,
            low1,
            low2,
            low3,
            low4,
            low5
        } = this.state;

        return (
            <Container>
                <h3 style={{color: "white"}}>5-day Forecast</h3>
                <Daily name={day1}
                    date={date1}
                    img="image1"
                    high={high1}
                    low={low1}
                    cond={cond1}/>
                <Daily name={day2}
                    date={date2}
                    img="image2"
                    high={high2}
                    low={low2}
                    cond={cond2}/>
                <Daily name={day3}
                    date={date3}
                    img="image3"
                    high={high3}
                    low={low3}
                    cond={cond3}/>
                <Daily name={day4}
                    date={date4}
                    img="image4"
                    high={high4}
                    low={low4}
                    cond={cond4}/>
                <Daily name={day5}
                    date={date5}
                    img="image5"
                    high={high5}
                    low={low5}
                    cond={cond5}/>
            </Container>
        );
    }
}

export default Dailies;

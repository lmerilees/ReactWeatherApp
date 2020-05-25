import React, {Component} from 'react';
import Daily from '../../components/Daily/Daily'
import {Container} from 'react-bootstrap';

class Dailies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null,
            lat: null, lon: null,
            day1: null, day2: null, day3: null, day4: null, day5: null,
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
            cond5: null,
        }
    }   

    /**
     * Get geolocation of device and store latitude and longitude in states
     */
    getLocation(){
         navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ 
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
                // if successful, proceed to make API request
                this.getDaily();
            },
            (error) => 
                this.setState({ errorMessage: error })
            )
        }

        /**
         * Get 5 day weather forecare from OpenWeatherMap API
         */
    getDaily(){

        // request 5 day forecast from Open Weather Map API
        fetch('https://community-open-weather-map.p.rapidapi.com/forecast?units=metric&lat='+this.state.lat.toString()+'&lon='+this.state.lon.toString(), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "0f7862f8efmsh15e592da62b201dp198c03jsn53244766f824"
            }
        })
        .then(async response => {
            const data = await response.json();
            
            // check if reponse is an error
            if(!response.ok){
                // get error message or default reponse
                const err = (data && data.message) || response.status;
                return Promise.reject(err);
            }

            console.log(data)
        
            // convert date string into date object
            let d1 = new Date(data.list[4].dt_txt)
            let d2 = new Date(data.list[12].dt_txt)
            let d3 = new Date(data.list[20].dt_txt)
            let d4 = new Date(data.list[28].dt_txt)
            let d5 = new Date(data.list[36].dt_txt)
            let dArray = [d1, d2, d3, d4, d5]


            // determine day names
            for (var i=0; i <= 4; i++){
                if (dArray[i].getDay() === 0){
                    dArray[i] = "Sunday"
                }
                else if (dArray[i].getDay() === 1){
                    dArray[i] = "Monday"
                }
                else if (dArray[i].getDay() === 2){
                    dArray[i] = "Tuesday"
                }
                else if (dArray[i].getDay() === 3){
                    dArray[i] = "Wednesday"
                }
                else if (dArray[i].getDay() === 4){
                    dArray[i] = "Thursday"
                }
                else if (dArray[i].getDay() === 5){
                    dArray[i] = "Friday"
                }
                else if (dArray[i].getDay() === 6){
                    dArray[i] = "Saturday"
                }
            }


            // set states
            this.setState({ day1: dArray[0],
                            day2: dArray[1],
                            day3: dArray[2],
                            day4: dArray[3],
                            day5: dArray[4],
                            date1: d1.getDate(),
                            date2: d2.getDate(),
                            date3: d3.getDate(),
                            date4: d4.getDate(),
                            date5: d5.getDate(),
                            cond1: data.list[4].weather[0].description,
                            cond2: data.list[12].weather[0].description,
                            cond3: data.list[20].weather[0].description,
                            cond4: data.list[28].weather[0].description,
                            cond5: data.list[36].weather[0].description,
                            high1: data.list[4].main.temp,
                            high2: data.list[12].main.temp,
                            high3: data.list[20].main.temp,
                            high4: data.list[28].main.temp,
                            high5: data.list[36].main.temp,
                        })
        })
        .catch(err => {
            this.setState({ errorMessage: err });
            console.error("An error occured", err);
        });


    }

    // this method is called when the component is rendered for the first time
    componentDidMount() {

        // determine user location and make API request
        this.getLocation();
        
    } 

    render(){
        const { cond1, cond2, cond3, cond4, cond5,
                day1, day2, day3, day4, day5,
                date1, date2, date3, date4, date5  } = this.state;

        return(
            <Container>
                <h3>5-day Forecast</h3>
                <Daily name={day1} date={date1} img="image1" high="15" low="5" cond={cond1} />
                <Daily name={day2} date={date2} img="image2" high="20" low="10" cond={cond2} />
                <Daily name={day3} date={date3} img="image3" high="17" low="10" cond={cond3} />
                <Daily name={day4} date={date4} img="image4" high="23" low="15" cond={cond4} />
                <Daily name={day5} date={date5} img="image5" high="14" low="7" cond={cond5} />
            </Container>
        );
    }
}

export default Dailies;
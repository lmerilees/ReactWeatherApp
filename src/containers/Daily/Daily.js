import React, {Component} from 'react';
import Daily from '../../components/Daily/Daily'
import {Container} from 'react-bootstrap';

let latt = null
let longg = null

class Dailies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            errorMessage: null,
            lat: null,
            long: null,
            day1: null,
            day2: null,
            day3: null,
            day4: null,
            day5: null
        }
    }   

    // this method is called when the component is rendered for the first time
    componentDidMount() {

        // determine geolocation of user
        navigator.geolocation.getCurrentPosition(function(position){
            latt = position.coords.latitude
            longg = position.coords.longitude
            console.log(latt)
            console.log(longg)
        }); 

        // request 5 day forecast from Open Weather Map API
        fetch("https://community-open-weather-map.p.rapidapi.com/forecast?units=metric&lat=52.11888866666666&lon=-106.66792299999999", {
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

            // otherwise set states
            this.setState({ day1: data.list[4].weather[0].description,
                            day2: data.list[12].weather[0].description,
                            day3: data.list[20].weather[0].description,
                            day4: data.list[28].weather[0].description,
                            day5: data.list[36].weather[0].description
                        })
        })
        .catch(err => {
            this.setState({ errorMessage: err });
            console.error("An error occured", err);
        });
    } 

    render(){
        const { day1 } = this.state;
        const { day2 } = this.state;
        const { day3 } = this.state;
        const { day4 } = this.state;
        const { day5 } = this.state;

        return(
            <Container>
                <h3>5-day Forecast</h3>
                <Daily name="Day1" date="1" img="image1" high="15" low="5" cond={day1} />
                <Daily name="Day2" date="2" img="image2" high="20" low="10" cond={day2} />
                <Daily name="Day3" date="3" img="image3" high="17" low="10" cond={day3} />
                <Daily name="Day4" date="4" img="image4" high="23" low="15" cond={day4} />
                <Daily name="Day5" date="5" img="image5" high="14" low="7" cond={day5} />
            </Container>
        );
    }
}

export default Dailies;
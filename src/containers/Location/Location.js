import React, {Component} from 'react';
import Location from '../../components/Location/Location'
import {Container} from 'react-bootstrap';

let latt = null
let longg = null

class Locations extends Component {

    constructor(props) {
        super(props);

        this.state = {
            errorMessage: null,
            locName: null,
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
            this.setState({ locName: data.city.name,
                        })
        })
        .catch(err => {
            this.setState({ errorMessage: err });
            console.error("An error occured", err);
        });
    } 

    render(){
        const { locName } = this.state;
        console.log({ locName })
        return(
            <Container>
                <Location name={ locName } />
            </Container>
        );
    }
}

export default Locations;
import React, { Component } from 'react';
import Hourly from '../../components/Hourly/Hourly'
import { Container, Row, Col } from 'react-bootstrap';

//* Icons courtesy of https://www.iconfinder.com/rasmusnielsendk */
import sunny from 'C:/Users/city_/weather-app2/src/Images/sunny.png'
import mostlyCloudy from 'C:/Users/city_/weather-app2/src/Images/mostlyCloudy.png'
import cloudy from 'C:/Users/city_/weather-app2/src/Images/cloudy.png'
import rain from 'C:/Users/city_/weather-app2/src/Images/rain.png'
import snow from 'C:/Users/city_/weather-app2/src/Images/snow.png'
import thunderstorm from 'C:/Users/city_/weather-app2/src/Images/thunderstorm.png'

class Hourlies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null,
            lat: null,
            lon: null,
            cond1: null,
            cond2: null,
            cond3: null,
            cond4: null,
            cond5: null, 
            cond6: null,
            cond7: null,
            cond8: null,
            cond9: null,
            cond10: null, 
            cond11: null,
            cond12: null,
            time1: null,
            time2: null,
            time3: null,
            time4: null,
            time5: null,
            time6: null,
            time7: null,
            time8: null,
            time9: null,
            time10: null,
            time11: null,
            time12: null,
            temp1: null,
            temp2: null,
            temp3: null,
            temp4: null,
            temp5: null,
            temp6: null,
            temp7: null,
            temp8: null,
            temp9: null,
            temp10: null,
            temp11: null,
            temp12: null,
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            image5: null,
            image6: null,
            image7: null,
            image8: null,
            image9: null,
            image10: null,
            image11: null,
            image12: null,
        }
    }

    /**
     * Get geolocation of device and store latitude and longitude in states
     */
    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
            // if successful, proceed to make API request
            this.getHourly();
        }, (error) => this.setState({errorMessage: error}))
    }

    /**
    * Get 48 hour hourly weather forecast from OpenWeatherMap API
    */
    getHourly() { // request 5 day forecast from Open Weather Map API
        let API = "648f721923c5e9d95de6fc8b69c904a2"
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + this.state.lat + "&lon=" + this.state.lon + "&units=metric&appid=" + API,)
        .then(async response => {
            const data = await response.json();

            // check if reponse is an error
            if (!response.ok) { // get error message or default reponse
                const err = (data && data.message) || response.status;
                return Promise.reject(err);
            }

            // get proper time of day for display
            let d1 = this.getTime(new Date(data.hourly[0].dt * 1000).getHours())
            let d2 = this.getTime(new Date(data.hourly[1].dt * 1000).getHours())
            let d3 = this.getTime(new Date(data.hourly[2].dt * 1000).getHours())
            let d4 = this.getTime(new Date(data.hourly[3].dt * 1000).getHours())
            let d5 = this.getTime(new Date(data.hourly[4].dt * 1000).getHours())
            let d6 = this.getTime(new Date(data.hourly[5].dt * 1000).getHours())
            let d7 = this.getTime(new Date(data.hourly[6].dt * 1000).getHours())
            let d8 = this.getTime(new Date(data.hourly[7].dt * 1000).getHours())
            let d9 = this.getTime(new Date(data.hourly[8].dt * 1000).getHours())
            let d10 = this.getTime(new Date(data.hourly[9].dt * 1000).getHours())
            let d11 = this.getTime(new Date(data.hourly[10].dt * 1000).getHours())
            let d12 = this.getTime(new Date(data.hourly[11].dt * 1000).getHours())

            // set remaining states (that required no manipulation)
            this.setState({
                cond1: data.hourly[0].weather[0].description,
                cond2: data.hourly[1].weather[0].description,
                cond3: data.hourly[2].weather[0].description,
                cond4: data.hourly[3].weather[0].description,
                cond5: data.hourly[4].weather[0].description,
                cond6: data.hourly[5].weather[0].description,
                cond7: data.hourly[6].weather[0].description,
                cond8: data.hourly[7].weather[0].description,
                cond9: data.hourly[8].weather[0].description,
                cond10: data.hourly[9].weather[0].description,
                cond11: data.hourly[10].weather[0].description,
                cond12: data.hourly[11].weather[0].description,
                time1: d1,
                time2: d2,
                time3: d3,
                time4: d4,
                time5: d5,
                time6: d6,
                time7: d7,
                time8: d8,
                time9: d9,
                time10: d10,
                time11: d11,
                time12: d12,
                temp1: Math.round(data.hourly[0].temp)+ "°",
                temp2: Math.round(data.hourly[1].temp)+ "°",
                temp3: Math.round(data.hourly[2].temp)+ "°",
                temp4: Math.round(data.hourly[3].temp)+ "°",
                temp5: Math.round(data.hourly[4].temp)+ "°",
                temp6: Math.round(data.hourly[5].temp)+ "°",
                temp7: Math.round(data.hourly[6].temp)+ "°",
                temp8: Math.round(data.hourly[7].temp)+ "°",
                temp9: Math.round(data.hourly[8].temp)+ "°",
                temp10: Math.round(data.hourly[9].temp)+ "°",
                temp11: Math.round(data.hourly[10].temp)+ "°",
                temp12: Math.round(data.hourly[11].temp)+ "°",
                image6: <img src={mostlyCloudy} alt="img2"></img>,
                image7: <img src={mostlyCloudy} alt="img2"></img>,
                image8: <img src={mostlyCloudy} alt="img2"></img>,
                image9: <img src={mostlyCloudy} alt="img2"></img>,
                image10: <img src={mostlyCloudy} alt="img2"></img>,
                image11: <img src={mostlyCloudy} alt="img2"></img>,
                image12: <img src={mostlyCloudy} alt="img2"></img>

            })

            this.getIcons();

        }).catch(err => {
            this.setState({errorMessage: err});
            console.error("An error occured", err);
        });
    }

    /**
     *  Convert 24hr to 12hr
     * @param {*} num 
     */
    getTime(num) {
        if(num > 12) {
            num = num - 12
            return num + "pm"
        }
        if(num === 0){
            num = 12
        }
        return num + "am"
    }

    /**
     * Check the conditions for each hour and sets the icon appropriately
     * @param  data 
     */
    getIcons(){
        switch (this.state.cond1)  {
            case "clear sky": this.setState({image1: <img src={sunny} alt="img1"></img> });
                break;
            case "few clouds": this.setState({image1: <img src={mostlyCloudy} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image1: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image1: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image1: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image1: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image1: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image1: <img src={rain} alt="img3"></img>});
                break;
            case "moderate rain": this.setState({image1: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image1: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image1: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image1: <img src={thunderstorm} alt="img4"></img>});
                break; 
            case "thunderstorm with rain": this.setState({image1: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image1: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image1: <img src={sunny} alt="img1"></img> });
                break;
        }   
        switch (this.state.cond2)  {
            case "clear sky": this.setState({image2: <img src={sunny} alt="img1"></img> });
                break;
            case "few clouds": this.setState({image2: <img src={mostlyCloudy} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image2: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image2: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image2: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image2: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image2: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image2: <img src={rain} alt="img3"></img>});
                break;
            case "moderate rain": this.setState({image2: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image2: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image2: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image2: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image2: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image2: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image2: <img src={sunny} alt="img1"></img> });
                break;
        }   
        switch (this.state.cond3)  {
            case "clear sky": this.setState({image3: <img src={sunny} alt="img1"></img> });
                break;
            case "few clouds": this.setState({image3: <img src={mostlyCloudy} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image3: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image3: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image3: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image3: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image3: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image3: <img src={rain} alt="img3"></img>});
                break;
            case "moderate rain": this.setState({image3: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image3: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image3: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image3: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image3: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image3: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image3: <img src={sunny} alt="img1"></img> });
                break;
        }   
        switch (this.state.cond4)  {
            case "clear sky": this.setState({image4: <img src={sunny} alt="img1"></img> });
                break;
            case "few clouds": this.setState({image4: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "scattered clouds": this.setState({image4: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image4: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image4: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image4: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image4: <img src={rain} alt="img3"></img>});
                break;
            case "moderate rain": this.setState({image4: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image4: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image4: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image4: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image4: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image4: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image4: <img src={sunny} alt="img1"></img> });
                break;
        }   
        switch (this.state.cond5)  {
            case "clear sky": this.setState({image5: <img src={sunny} alt="img1"></img> });
                break;
            case "few clouds": this.setState({image5: <img src={mostlyCloudy} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image5: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image5: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image5: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image5: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image5: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image5: <img src={rain} alt="img3"></img>});
                break;            
            case "moderate rain": this.setState({image5: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image5: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image5: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image5: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image5: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image5: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image5: <img src={sunny} alt="img1"></img> });
                break;
        }   
        switch (this.state.cond6)  {
            case "clear sky": this.setState({image6: <img src={sunny} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image6: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image6: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image6: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image6: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image6: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image6: <img src={rain} alt="img3"></img>});
                break;
            case "moderate rain": this.setState({image6: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image6: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image6: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image6: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image6: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image6: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image6: <img src={sunny} alt="img1"></img> });
                break;
        }   
        switch (this.state.cond7)  {
            case "clear sky": this.setState({image7: <img src={sunny} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image7: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image7: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image7: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image7: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image7: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image7: <img src={rain} alt="img3"></img>});
                break;
            case "moderate rain": this.setState({image7: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image7: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image7: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image7: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image7: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image7: <img src={sunny} alt="img1"></img> });
                break;
        }   
        switch (this.state.cond8)  {
            case "clear sky": this.setState({image8: <img src={sunny} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image8: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image8: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image8: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image8: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image8: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image8: <img src={rain} alt="img3"></img>});
                break;
            case "moderate rain": this.setState({image8: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image8: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image8: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image8: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image8: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image8: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image8: <img src={sunny} alt="img1"></img> });
                break;
        }   
        switch (this.state.cond9)  {
            case "clear sky": this.setState({image9: <img src={sunny} alt="img1"></img> });
                break;
            case "few clouds": this.setState({image9: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "scattered clouds": this.setState({image9: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image9: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image9: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image9: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image9: <img src={rain} alt="img3"></img>});
                break;
            case "moderate rain": this.setState({image9: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image9: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image9: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image9: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image9: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image9: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image9: <img src={sunny} alt="img1"></img> });
                break;
        }   
        switch (this.state.cond10)  {
            case "clear sky": this.setState({image10: <img src={sunny} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image10: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image10: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image10: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image10: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image10: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image10: <img src={rain} alt="img3"></img>});
                break;            
            case "moderate rain": this.setState({image10: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image11: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image10: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image10: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image10: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image10: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image10: <img src={sunny} alt="img1"></img> });
                break;
        }
        switch (this.state.cond11)  {
            case "clear sky": this.setState({image11: <img src={sunny} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image11: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image11: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image11: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image11: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image11: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image11: <img src={rain} alt="img3"></img>});
                break;            
            case "shower rain": this.setState({image11: <img src={rain} alt="img3"></img>})
                break;
            case "moderate rain": this.setState({image11: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image11: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image11: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image11: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image11: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image11: <img src={sunny} alt="img1"></img> });
                break;
        }  
        switch (this.state.cond12)  {
            case "clear sky": this.setState({image12: <img src={sunny} alt="img1"></img> });
                break;
            case "scattered clouds": this.setState({image12: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "few clouds": this.setState({image12: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "broken clouds": this.setState({image12: <img src={mostlyCloudy} alt="img2"></img>});
                break;
            case "overcast clouds": this.setState({image12: <img src={cloudy} alt="img2"></img>});
                break;
            case "rain": this.setState({image12: <img src={rain} alt="img3"></img>});
                break;
            case "light rain": this.setState({image12: <img src={rain} alt="img3"></img>});
                break;
            case "shower rain": this.setState({image12: <img src={rain} alt="img3"></img>});
                break;   
            case "moderate rain": this.setState({image12: <img src={rain} alt="img3"></img>});
                break;
            case "heavy intensity rain": this.setState({image12: <img src={rain} alt="img3"></img>});
                break;
            case "thunderstorm": this.setState({image12: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "thunderstorm with rain": this.setState({image12: <img src={thunderstorm} alt="img4"></img>});
                break;
            case "snow": this.setState({image12: <img src={snow} alt="img5"></img>});
                break;
            default: this.setState({image12: <img src={sunny} alt="img1"></img> });
                break;
        }  
    }


    // this method is called when the component is rendered for the first time
    componentDidMount() { 
        this.getLocation();
    }


    render() {
        return (
            <Container fluid="xl">
                <h3 style={{color: "#292b2c", textAlign: "center"}}>Hourly Forecast</h3>
                <Row>
                    <Col>
                        <Hourly time={this.state.time1} cond={this.state.cond1} temp={this.state.temp1} img={this.state.image1} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time2} cond={this.state.cond2} temp={this.state.temp2} img={this.state.image2} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time3} cond={this.state.cond3} temp={this.state.temp3} img={this.state.image3} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time4} cond={this.state.cond4} temp={this.state.temp4} img={this.state.image4} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time5} cond={this.state.cond5} temp={this.state.temp5} img={this.state.image5} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time6} cond={this.state.cond6} temp={this.state.temp6} img={this.state.image6} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time7} cond={this.state.cond7} temp={this.state.temp7} img={this.state.image7} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time8} cond={this.state.cond8} temp={this.state.temp8} img={this.state.image8} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time9} cond={this.state.cond9} temp={this.state.temp9} img={this.state.image9} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time10} cond={this.state.cond10} temp={this.state.temp10} img={this.state.image10} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time11} cond={this.state.cond11} temp={this.state.temp11} img={this.state.image11} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hourly time={this.state.time12} cond={this.state.cond12} temp={this.state.temp12} img={this.state.image12} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Hourlies;

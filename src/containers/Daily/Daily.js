import React, {Component} from 'react';
import Daily from '../../components/Daily/Daily'
import {Container} from 'react-bootstrap';

class Dailies extends Component {
    render(){
        return(
            <Container>
                <Daily name="Monday" date="1" img="image1" high="15" low="5" cond="rain" />
                <Daily name="Tuesday" date="2" img="image2" high="20" low="10" cond="mostly sunny" />
                <Daily name="Wednesday" date="3" img="image3" high="17" low="10" cond="mostly cloudy" />
                <Daily name="Thursday" date="4" img="image4" high="23" low="15" cond="sunny" />
                <Daily name="Friday" date="5" img="image5" high="14" low="7" cond="cloudy" />
                <Daily name="Saturday" date="6" img="image6" high="-7" low="-15" cond="snow" />
                <Daily name="Sunday" date="7" img="image7" high="20" low="10" cond="thunderstorm" />
            </Container>
        );
    }
}

export default Dailies;
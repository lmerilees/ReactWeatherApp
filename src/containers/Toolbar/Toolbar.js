import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar'
import {Container, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import refresh from 'C:/Users/city_/weather-app2/src/Images/refresh.png'


class Toolbars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null
        }
    }

    reloadPage() {
        window.location.reload(false)
    }

    // this method is called when the component is rendered for the first time
    componentDidMount() {
        this.setState = {
            img: {refresh}
        }
    }

    render() {
        return (
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup size="lg" className="mv-2" aria-label="First group">
                    <Button variant="white" onClick={this.reloadPage}><img src={refresh} alt="refresh" onclick={this.reloadPage}></img></Button>
                </ButtonGroup>
            </ButtonToolbar>
        );
    }
}

export default Toolbars;

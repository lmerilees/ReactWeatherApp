import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Daily from './containers/Daily/Daily'
import Current from './containers/Current/Current'
import Hourly from './containers/Hourly/Hourly'

function Home() {
    return (
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
    )
}

export default Home
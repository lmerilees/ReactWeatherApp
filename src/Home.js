import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Daily from './containers/Daily/Daily'
import Current from './containers/Current/Current'

function Home() {
    return (
        <Container fluid>
            <Col>
                <Row>
                    <Current/>
                    <br></br>
                    <Daily/>
                </Row>
            </Col>
        </Container>
    )
}

export default Home
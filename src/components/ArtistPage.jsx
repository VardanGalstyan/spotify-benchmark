import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import LeftNavbar from './LeftNavbar'
import Player from './Player'

export default class ArtistPage extends Component {
    render() {
        return (
            <Container fluid>
            <Row>
                <Col className='col-2'>
                    <LeftNavbar />
                </Col>
                <Col className='col-10'>
                    <h1>content</h1>
                </Col>
            </Row>
            <Row>
                <Player />
            </Row>
        </Container>
        )
    }
}

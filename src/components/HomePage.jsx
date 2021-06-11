import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import LeftNavbar from './LeftNavbar';
import Navbar from './Navbar';
import Player from './Player';
import Main from './Main'


class HomePage extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className='col-2'>
                        <LeftNavbar />
                    </Col>
                    <Col className='col-10'>
                        <Navbar />
                        <Main title="#THROWBACKTHURSDAY" />
                        <Main title="Classifiche" />
                    </Col>
                </Row>
                <Row>
                    <Player />
                </Row>
            </Container>
        )
    }
}

export default HomePage
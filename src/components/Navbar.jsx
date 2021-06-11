import React, { Component } from 'react'
import {Container} from 'react-bootstrap'

export default class Navbar extends Component {
    render() {
        return (
            <Container className = 'topNavbar'>
                <div className="d-flex justify-content-center d-none d-sm-flex">
                    <div className="button_top">TRENDING
                <div className="green_line"></div>
                    </div>
                    <div className="button_top">PODCAST</div>
                    <div className="button_top">MOODS AND GENRES</div>
                    <div className="button_top">NEW RELEASES</div>
                    <div className="button_top">DISCOVER</div>
                </div>
            </Container>
        )
    }
}

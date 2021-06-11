import React, { Component } from 'react'
import {Col} from 'react-bootstrap'

export default class Card extends Component {
    render() {
        return (
            <>
                <div className="col-sm-6 col-md-3 col-lg-2">
                    <a href="artist-page/artist.html">
                        <div className="card">
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQg48goVB02o_FiR-Xj76ZE28-iSXGoAqvw&usqp=CAU" alt="Card image cap" />
                            <div className="card-play-btn"><i className="fas fa-play"></i></div>
                        </div>
                    </a>
                    <p className="card-text">DJ Khalid</p>
                </div>
            </>
        )
    }
}

import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { BsPlayFill, BsSkipEndFill, BsSkipStartFill, BsVolumeUp, BsShuffle, BsTv, BsList, BsFillHeartFill, BsArrowClockwise} from "react-icons/bs";



export default class Player extends Component {
    render() {
        return (
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-4">
                        <div className="player-left d-flex align-items-center">
                            <img src='icons/playeralbum.jpg' alt="" class="p-0" />
                            <div className="d-flex flex-column d-none d-sm-flex">
                                <div className="player-song-title text-white">Song For My Father</div>
                                <div className="player-author">Horace Silver</div>
                            </div>
                                <Button>
                                    <BsFillHeartFill/>
                                </Button>
                                <Button>
                                    <BsTv/>
                                </Button>                           
                            </div>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-center flex-column">
                        <div className="row justify-content-center align-content-center">
                            <div className="col player-buttons justify-content-between">
                                <Button>
                                    <BsShuffle className='fas'/>
                                </Button>
                                <Button>
                                    <BsSkipStartFill className='fas'/>
                                </Button>
                                <Button className="play-button">
                                    <BsPlayFill/>
                                </Button>
                                <Button>
                                    <BsSkipEndFill className='fas'/>
                                </Button>
                                <Button>
                                    <BsArrowClockwise/>
                                </Button>
                            </div>
                        </div>

                        <div className="row w-100 timeline">
                            <div className="col d-flex align-items-center">
                                <div className="player-time">0:00</div>
                                <div className="col px-2">
                                    <div className="player-bar"></div>
                                </div>
                                <div className="player-time">0:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center player-right-section">
                        <Button>
                            <BsList className='fas'/>
                        </Button>
                        <Button>
                            <BsTv className='fas'/>
                        </Button>
                        <div className="d-flex align-items-center volume-bar">
                            <Button>
                                <BsVolumeUp className='fas'/>
                            </Button>
                            <div className="player-volume"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

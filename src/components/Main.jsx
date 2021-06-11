import React, { Component } from 'react'
import {Container, Row} from 'react-bootstrap'
import Card from './Card'


export default class Main extends Component {
    render() {
        return (
            <Container>
               <Row className='main'>
                   <Row>
                       <h2 className='my-4'>{this.props.title}</h2>
                   </Row>
                   <Row>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                   </Row>
               </Row>
            </Container>
        )
    }
}

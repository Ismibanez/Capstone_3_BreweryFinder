import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import {Container, Col, Row} from 'reactstrap';
import Beers from './Beers';
import Header from './Header';
import Footer from './Footer';

class SiteBrewery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brewery_id: props.brewery_id,
        }
    } 

    render() {
        return(
            <Container className='mt-5 pt-3'>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Container className='mt-5 pt-3'>
                    <Row>
                        Lets try this agian I guess
                    </Row>
                </Container>
                <Row className='mt-5 pt-3'>
                    <Col>
                        <Beers/>
                    </Col>
                </Row>
                <Row className='mt-5 pt-3'>
                    <Col>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SiteBrewery;
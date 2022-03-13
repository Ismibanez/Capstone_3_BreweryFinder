import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import {Container, Col, Row} from 'reactstrap';
import Beers from './Beers';
import Header from './Header';

class SiteBrewery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brewery_id: props.brewery_id,
        }
    } 

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Beers/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SiteBrewery;
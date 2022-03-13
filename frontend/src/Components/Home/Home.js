import {Link} from 'react-router-dom'
import Header from '../Subcomponents/Header';
import React, { Component } from 'react';
import Beers from '../Subcomponents/Beers';
import Breweries from '../Subcomponents/Breweries';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component{
    
    render() {
        return(
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Header/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Breweries/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;
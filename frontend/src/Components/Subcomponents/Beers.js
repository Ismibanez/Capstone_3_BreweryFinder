import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import CardList from '../CardList';
import axios from 'axios';
import Header from './Header';
import { Card, CardBody, CardTitle, CardText, Button, Container, Col, CardGroup } from 'reactstrap';
import Scroll from '../Scroll';

class Beers extends Component {
    
    constructor() {
        super()
        this.state = {
            beers: [ ]
        }
    }  

    componentDidMount() {
        axios.get('http://localhost:8081/beers')
            .then(res => {
                console.log(res)
                this.setState({
                    beers: res.data
                })
            })
    }
    
    render() {
        const { beers } = this.state;
        const beerList = beers.length ? (
            beers.map(beer => {
               return (
                    <Col sm="3">
                        <Card body color="secondary" outline >
                            <CardBody>
                                <CardTitle tag="h3">
                                    {beer.beerName}
                                </CardTitle>
                                <CardText>
                                    {beer.description}
                                </CardText>
                                <Button>
                                    Reviews
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
               ) 
            })
        ) : (
            <div className="center"> 
                <h1>Loading...</h1>
            </div>);
        return(
            <Container>
                <div>
                    <Scroll>
                        <CardGroup>
                            { beerList }
                        </CardGroup>
                    </Scroll>
                </div>
            </Container>
        )
    }
}

export default Beers;
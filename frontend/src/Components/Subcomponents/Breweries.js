import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import CardList from '../CardList';
import axios from 'axios';
import Header from './Header';
// import { Container, Card, Button } from 'react-bootstrap'
import Scroll from '../Scroll';
import { Card, CardBody, CardTitle, CardText, Button, Container, Col, CardGroup } from 'reactstrap';

class Breweries extends Component {
    
    constructor() {
        super()
        this.state = {
            breweries: [ ]
        }
    }  

    componentDidMount() {
        axios.get('http://localhost:8081/brewery')
            .then(res => {
                console.log(res)
                this.setState({
                    breweries: res.data
                })
            })
    }
    
    render() {
        const { breweries } = this.state;
        const breweryList = breweries.length ? (
            breweries.map(brewery => {
               return (
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {brewery.brewery_name}
                                </CardTitle>
                                <CardText>
                                    {brewery.history}
                                </CardText>
                                <Button>
                                    Beers
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    
                    // <Card style={{ width: '18rem' }}>
                    //     <Card.Img variant="top" src="holder.js/100px180" />
                    //     <Card.Body>
                    //     <Card.Title>{brewery.brewery_name}</Card.Title>
                    //     <Card.Text>
                    //         {brewery.history}
                    //     </Card.Text>
                    //     <Button variant="primary"> Beers </Button>
                    //     </Card.Body>
                    // </Card>
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
                            { breweryList }
                        </CardGroup>
                    </Scroll>
                </div>
            </Container>
        )
    }
}

export default Breweries;
import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText, Button, Container, Col, CardGroup, CardSubtitle } from 'reactstrap';
import Scroll from '../Scroll';
import Breweries from './Breweries';

class Beers extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            beers: [ ],
            breweryId: this.props.breweryId
        }
    }  

    async componentDidMount() {        
        
        const brewery_id = this.state.breweryId;
        const url = `http://localhost:8081/beers/brewery_id/` + brewery_id;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({
            beers: data
        })


        // axios.get(`http://localhost:8081/beers/brewery_id/` + brewery_id)
        //     .then(res => {
        //         console.log(res)
        //         console.log(this.state.breweryId)
        //         this.setState({
        //             beers: res.data
        //         })
        //     })
    }
    
    render() {
        const { beers } = this.state;
        const beerList = beers.length ? (
            beers.map(beer => {
                return (
                    <Col sm="3">
                        <Card body color="secondary" outline >
                            <CardBody>
                                <CardTitle tag="h3" className='d-flex justify-content-center'>
                                    {beer.beerName}
                                </CardTitle>
                                <CardText className='d-flex justify-content-center'>
                                    {beer.description}
                                </CardText>
                                <Col className='d-flex justify-content-center'>
                                    <Button >
                                        Reviews
                                    </Button>
                                </Col>
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
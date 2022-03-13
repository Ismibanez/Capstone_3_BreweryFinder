import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import Scroll from '../Scroll';
import { Card, CardBody, CardTitle, CardText, Button, Container, Col, CardGroup } from 'reactstrap';

class Breweries extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            breweries: [ ],
            breweryId: "",
            token: props.token,
            user: props.user
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
                                <CardTitle tag="h5" className='d-flex justify-content-center'>
                                    {brewery.brewery_name}
                                </CardTitle>
                                <CardText className='d-flex justify-content-center'>
                                    {brewery.history}
                                </CardText>
                                <Col className='d-flex justify-content-center'>
                                    {/* <Button onClick={ this.setState({ breweryId: brewery.brewery_id }) }>
                                        Visit Site 
                                    </Button> */}
                                    <a href='./SiteBrewery.js' className='btn btn-secondary'>
                                        Visit Site
                                    </a>
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
                            { breweryList }
                        </CardGroup>
                    </Scroll>
                </div>
            </Container>
        )
    }
}

export default Breweries;
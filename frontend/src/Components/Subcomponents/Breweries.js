import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import CardList from '../CardList';
import axios from 'axios';
import Header from './Header';
import { Card, Button } from 'react-bootstrap'
import Scroll from '../Scroll';

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
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>{brewery.brewery_name}</Card.Title>
                        <Card.Text>
                            {brewery.history}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
               ) 
            })
        ) : (
            <div className="center"> 
                <h1>Loading...</h1>
            </div>);
        return(
            <div>
                <div>
                    <Scroll>
                        <div className=''>
                        { breweryList }
                        </div>
                    </Scroll>
                </div>
            </div>
        )
    }
}

export default Breweries;
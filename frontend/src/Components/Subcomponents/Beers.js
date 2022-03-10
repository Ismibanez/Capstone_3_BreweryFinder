import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import CardList from '../CardList';
import axios from 'axios';
import Header from './Header';
import { Card, Button } from 'react-bootstrap'
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
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>{beer.beerName}</Card.Title>
                        <Card.Text>
                            {beer.description}
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
                        { beerList }
                        </div>
                    </Scroll>
                </div>
            </div>
        )
    }
}

export default Beers;
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
                        <Row className='justify-content-md-center'>
                            <Col>
                                <Header/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Breweries/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Beers/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;

//  constructor() {
//         super()
//         this.state = {
//             beers: []
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:8081/beers')
//             .then(res => {
//                 console.log(res)
//                 this.setState({
//                     beers: res.data
//                 })
//             })
//     }
    
//     render() {
//         const { beers } = this.state;
//         const beerList = beers.length ? (
//             beers.map(beer => {
//                return (
//                     <div className='post card' key={beer.id}>
//                         <div className='card-content'>
//                             <span className='card-title'>
//                                 {beer.beerName}    
//                             </span>
//                         </div>
//                     </div>
//                ) 
//             })
//         ) : (
//             <div className="center"> 
//                 No posts yet 
//             </div>);
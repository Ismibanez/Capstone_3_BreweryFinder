import {Link} from 'react-router-dom'
import Header from '../Subcomponents/Header';
import React, { Component } from 'react';
import Beers from '../Subcomponents/Beers';
import Breweries from '../Subcomponents/Breweries';

class Home extends Component{
    render() {
        return(
            <div>
                <div>
                    <Header/>
                    <Breweries/>
                    <Beers/>
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
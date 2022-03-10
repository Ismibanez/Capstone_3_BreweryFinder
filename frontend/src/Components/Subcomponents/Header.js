import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../Shared/baseUrl';
import { ConfigureStore } from '../../Redux/configureStore';
import CardList from '../CardList';
import bootstrap from 'bootstrap';

function Header() {

        return (
            <div className='container d-flex'>
                <div className='row in-line'>
                    <h1 className='col'>
                        Welcome!
                    </h1>
                    <p className='col'>Username</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <button> Beers </button>
                    <button> Breweries </button>
                    <button> Contact Us </button>
                </div>


            </div>
        )
}

export default Header;
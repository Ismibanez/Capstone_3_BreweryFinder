import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../Shared/baseUrl';
import { ConfigureStore } from '../../Redux/configureStore';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';


function Header() {

        return (

            <Container>
                <Row>
                <Col>
                    <Stack direction="horizontal" gap={3}>
                        <h1>Welcome!</h1>
                        <div className="bg-light border ms-auto">Username</div>
                        <div className="vr" />
                        <div className="bg-light border">LogOut</div>
                    </Stack>
                </Col>
                </Row>
                <Row> 
                    <Col>
                        <Button color='light' size='lg'> Beers</Button>
                    </Col>
                    <Col>
                        <Button color='light' size='lg'> Breweries</Button>
                    </Col>
                    <Col>
                        <Button color='light' size='lg'> Contact Us</Button>
                    </Col>
                    
                </Row>
            </Container>
        )
}

export default Header;
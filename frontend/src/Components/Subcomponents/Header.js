import React, { Component, useState } from 'react';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';


function Header() {

        return (

            <Container >
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={4}>
                            <h1>Welcome!</h1>
                            <div className="bg-light border ms-auto">Username</div>
                            <div className="bg-light border">LogOut</div>
                        </Stack>
                    </Col>
                </Row>
                <Row> 
                    <Col className='d-flex justify-content-center'>
                        <Button color='light' size='lg'> Beers</Button>
                    </Col>
                    
                    <Col className='d-flex justify-content-center'>
                        <Button color='light' size='lg'> Breweries</Button>
                    </Col>
                   
                    <Col className='d-flex justify-content-center'>
                        <Button color='light' size='lg'> Contact Us</Button>
                    </Col>
                    
                </Row>
            </Container>
        )
}

export default Header;
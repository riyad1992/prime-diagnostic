import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Team = ({team}) => {
    const {name, img, Specialties} = team
    return (
        <Col>
            <Card className='service border border-0 text-center box shadow  bg-white rounded'>
                <Card.Img style={{height:'200px', padding: '20px', borderRadius:'50px'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Specialties: {Specialties.slice(0,20)}</Card.Text>
                    <button>Appoinment</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Team;
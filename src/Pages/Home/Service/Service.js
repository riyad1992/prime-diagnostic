import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, img, name, details, price} = service
    return (
        <Col>
            <Card className='service border border-0 text-center box shadow  bg-white rounded'>
                <Card.Img style={{height:'200px', padding: '20px', borderRadius:'50px'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name.slice(0,20)}</Card.Title>
                    <Card.Text>{details.slice(0,120)}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Link to={`/appoinment/${id}`}><button className='btn btn-warning w-100'>Book {name.slice(0,20)}</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
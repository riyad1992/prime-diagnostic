import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import qs from '../../../images/MakesDifferent/Qs.png'
import eq from '../../../images/MakesDifferent/Eq.png'
import em from '../../../images/MakesDifferent/Em.png'
import './MakesDifferent.css'

const MakesDifferent = () => {
    return (
        <div className='container mt-5'>
            <h1 className='mb-4'>What Makes us Different</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className='service border border-0 card-images text-center'>
                        <Card.Img variant="top" src={qs} />
                        <Card.Body>
                            <Card.Title>Qualified Specialists</Card.Title>
                            <Card.Text>Overseas Trained Specialists and Overseas Specialists in Training in emergency medicine can have their skills recognised.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='service border border-0 card-images'>
                        <Card.Img variant="top" src={eq} />
                        <Card.Body>
                            <Card.Title>Modern equipment </Card.Title>
                            <Card.Text>Modern anesthesia machines include added tools such as a ventilator, suction unit, and patient-monitoring devices.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='service border border-0 card-images'>
                        <Card.Img variant="top" src={em} />
                        <Card.Body>
                            <Card.Title>Emergency Diagnostic</Card.Title>
                            <Card.Text>It is important to note that a variety of quality measures are in place to quantify the use of diagnostic procedures by emergency.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default MakesDifferent;

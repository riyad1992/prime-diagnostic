import React from 'react';
import { Row } from 'react-bootstrap';
import useEffects from '../../../hooks/useEffects';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useEffects()
    return (
        <div id='services' className='container mt-5'>
            <h1 className='mb-0'>Our Popular Services</h1>
            <hr className='w-25 mx-auto bg-danger'/>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;
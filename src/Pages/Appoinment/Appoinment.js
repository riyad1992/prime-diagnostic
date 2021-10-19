import React from 'react';
import { useParams } from 'react-router';
import useEffects from '../../hooks/useEffects';
import './Appoinment.css'

const Appoinment = () => {
    const {id} = useParams()
    const [services] = useEffects()

    const selectedService = services.find(service => service.id === id)
    
    return (
        <div className='appoinment  py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 p-2'>
                        <h1>Test Name: {selectedService?.name}</h1>
                        <p>Descriptin: {selectedService?.details}</p>
                        <h3>Price: ${selectedService?.price}</h3>
                        <button className='btn btn-warning'>Get Appoinment</button>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img src={selectedService?.img} style={{width:'100%', borderRadius:'50px'}} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;
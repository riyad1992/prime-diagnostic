import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found my-5'>
            <Link to='/home'><button className='btn btn-warning'>Back Home</button></Link>
        </div>
    );
};

export default NotFound;
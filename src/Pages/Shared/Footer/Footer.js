import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div className='mt-5 footer pt-5'>
            <div className='container'>
                <div className='container row'>
                    <div className='col-12 col-md-6 col-lg-4 text-start'>
                        <div className='d-flex align-items-center mb-4 text-start'>
                            <img src={logo} style={{width:'50px'}} alt=''/>
                            <h4 className=''>Prime Diagonstic</h4>
                        </div>
                        <ul className='d-flex'>
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-linkedin"></i></li>
                            <li><i className="fab fa-instagram-square"></i></li>
                            <li><i className="fab fa-youtube-square"></i></li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 text-start'>
                        <h4>Contact Us</h4>
                        <hr></hr>
                        <p><FontAwesomeIcon icon={faPhone} /> Call us: +1-800-852-6000</p>
                        <p><FontAwesomeIcon icon={faLocationArrow} /> Address: #5 Maskal, New York</p>
                        <p><FontAwesomeIcon icon={faMailBulk} /> Eamil: pdiagonstic@gmail.com</p>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 text-start'>
                        <h4>Check Appoinment</h4>
                        <hr/>
                        <input type='date' className='mb-2 border border-0 rounded-3 bg-warning'/>
                        <br/>
                        <button className='btn btn-warning'>Apply Now</button>
                    </div>
                </div>
                <p className='text-start py-5'>Copyright<span>&copy;</span> prime diagonstic 2020</p>
            </div>
        </div>
    );
};

export default Footer;
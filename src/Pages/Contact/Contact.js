import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <div className='container my-5'>
            <div className="contact">
                <div className=''>
                    <h3>Contact With Us</h3>
                    <hr className='w-50 mx-auto bg-danger'></hr>
                    <p><FontAwesomeIcon icon={faPhone} /> Call us: +1-800-852-6000</p>
                    <p><FontAwesomeIcon icon={faLocationArrow} /> Address: #5 Maskal, New York</p>
                    <p><FontAwesomeIcon icon={faMailBulk} /> Eamil: pdiagonstic@gmail.com</p>
                </div>
                <p>Call us +50165265 or Leave us a message.</p>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <form>
                              <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1"/>
                              </div>
                              
                              <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                              </div>
                              <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Email" id="basic-url" aria-describedby="basic-addon3"/>
                              </div>
                              
                              <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="City" aria-label="Amount (to the nearest dollar)"/>
                              </div>
                              
                              <div className="input-group mb-3">
                                <input type="number" className="form-control" placeholder="Telephone" aria-label="Username"/>
                              </div>
                        </form>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="input-group">
                            <span className="input-group-text">Messege</span>
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                          </div>
                    </div>
                </div>
                <div className="send-button d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-danger btn-lg px-5 w-50 text-center">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
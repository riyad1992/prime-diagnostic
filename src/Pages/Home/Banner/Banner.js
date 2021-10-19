import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import banner4 from '../../../images/banner/banner4.jpg'

const Banner = () => {
    return (
        <div className='carousel-banner'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='banner-heading'>
                        <h3>Take Care of Your Health</h3>
                        <p>At Prime Digonstic, We are do any kind of medical test performed to aid in the diagnosis or detection of disease.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='banner-heading'>
                        <h3>Medical laboratory</h3>
                        <p>A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis,</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='banner-heading'>
                        <h3>Medical laboratory</h3>
                        <p>A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis,</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='banner-heading'>
                        <h3>Collecting Samples for Laboratory Testing</h3>
                        <p>Today’s technologies allow testing on an impressively wide variety of samples collected from the human body. Most often, all that is required is a blood sample.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
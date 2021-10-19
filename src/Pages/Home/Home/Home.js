import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import MakesDifferent from '../MakesDifferent/MakesDifferent';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MakesDifferent></MakesDifferent>
            <Banner2></Banner2>
            <Services></Services>
        </div>
    );
};

export default Home;
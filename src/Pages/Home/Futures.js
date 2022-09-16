import React from 'react'; 
import Footer from '../Share/Footer';
import Banner from './Banner';
import Business from './Business';
import Continuous from './Continuous';
import './Futures.css'
import Information from './Information';
import Leading from './Leading';
import Makers from './Makers';
import Marquee from './Marquee'; 
import Plans from './Plans';

const Futures = () => {
    return (
        <div> 
            <Banner></Banner>
            <Marquee></Marquee>
            <Business></Business>
            <Makers></Makers>
            <Leading></Leading>
            <Information></Information> 
            <Plans></Plans>
            <Continuous></Continuous>
            <Footer></Footer>
        </div>
    );
};

export default Futures;
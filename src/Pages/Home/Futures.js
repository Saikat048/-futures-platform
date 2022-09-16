import React from 'react'; 
import Banner from './Banner';
import Business from './Business';
import './Futures.css'
import Information from './Information';
import Leading from './Leading';
import Makers from './Makers';
import Marquee from './Marquee';

const Futures = () => {
    return (
        <div> 
            <Banner></Banner>
            <Marquee></Marquee>
            <Business></Business>
            <Makers></Makers>
            <Leading></Leading>
            <Information></Information>
        </div>
    );
};

export default Futures;
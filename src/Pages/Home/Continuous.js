import React from 'react';
import './Continuous.css'

const Continuous = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/6192b02960e94236fc22acce/385a884c-6fe3-4964-874f-24b5e9c352bc/AI_and_robotisation.jpg")` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div >
                <div className='text-white'>
                    <h1 className="mb-5 text-7xl font-bold">BEST PRACTICES IN FORESIGHT</h1>
                    <p className="mb-5 text-2xl">Check out our blog and resources for latest trend highlights and cutting edge foresight methodology. </p>
                    <button className="btn btn-primary text-2xl">Go to Future Proof blog </button>
                </div>
            </div>
        </div>
    );
};

export default Continuous;

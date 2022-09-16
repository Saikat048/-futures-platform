import React from 'react';

const Leading = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-20 items-center my-32'>
            <div>
              <img src="https://images.squarespace-cdn.com/content/v1/6192b02960e94236fc22acce/eb16f66d-82eb-4e78-a25e-136304f4d704/Futurist+team+led+by+Dr+Tuomo+Kuosa.png" alt="" />
            </div>

            <div className='px-10 mt-10'>
                 <h3>LEADING FUTURISTS WORKING FOR YOU 24/7</h3>
                 <p className='future'>Futures Platform’s team of futurist continuously scan 360 degrees of the world to identify and study key changes and scenarios that could impact our lives and the world economy in the 5-20+ years ahead. Our futurists produce roughly 200 in-depth analyses of future phenomena each year, and keep existing ones up to date as new information becomes available.</p>
            </div>
        </div>
    );
};

export default Leading;
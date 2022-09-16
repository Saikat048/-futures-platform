import React from 'react';
import './Plans.css'

const Plans = () => {
    return (
        <div className=' py-24'>
            <div className='plan grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-20 text-center'>
                <div>
                    <h2 className='count'>900+</h2>
                    <h4 className='title'>ANALYSES OF FUTURE TRENDS & PHENOMENA</h4>
                    <p>Save time and find reliable futures intelligence published as soon as spotted by leading futurists. Have all your strategic foresight work in one place and share the knowledge across your organisation.</p>
                </div>
                <div>
                    <h2 className='count'>500,000+</h2>
                    <h4 className='title'>NEWS & ALERTS</h4>
                    <p>Stay on the pulse of the latest developments and weak signals with AI-powered, continuously updating news streams. Get alerted with a bi-weekly Disruptor Alert of hand-picked, most disruptive news and articles.</p>
                </div>
                <div>
                    <h2 className='count'>40+</h2>
                    <h4 className='title'>FORESIGHT RADARS</h4>
                    <p>Get a holistic picture of future changes curated by futurists of over 40 themes in less than a minute – and start customising it to your environment. Easily export to share with your organisation and other stakeholders.</p>
                </div>
            </div>
            <div className='grid justify-center mt-28'>
            <button class="btn btn-wide">See plans & pricing</button>
            </div>
        </div>
    );
};

export default Plans;
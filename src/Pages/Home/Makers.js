import React from 'react';
import './Makers.css'

const Makers = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-20 items-center my-32'>
            <div>
                <h3>COLLABORATIVE FORESIGHT PLATFORM FOR ANALYSTS AND DECISION-MAKERS</h3>
                <p className='future pr-12'>Futures Platform is the industry standard source for future trends, scenarios and long term change. It’s a full-functionality visual and collaborative toolbox for strategy and foresight teams, as well as executives and board professionals, ensuring your organisation’s strategy and key decisions are future proof.
                </p>
            </div>

            <div className='px-10 mt-10'>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        900+ future trend analyses futurists
                    </div>
                    <div class="collapse-content">
                        <p>

                            Futures Platform hosts a vast library of analyses of future trends and phenomena, created by a team of world’s leading futurists. Dozens of new analyses are added each month, and existing ones updated regularly.

                        </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Foresight radars on world's key dimensoions
                    </div>
                    <div class="collapse-content">
                        <p>Take advantage of 40+ foresight radars created by professional futurists, on key domains such as climate change, cyber security and artificial intelligence. Use these templates to pre-populate your own foresight radars, to work on scenarios your organisation is likely to face in the future.</p>
                    </div>
                </div><div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Al-generated feed of signals
                    </div>
                    <div class="collapse-content">
                        <p>Input your preferred domains and then enjoy an auto-crawled feed of news and signals from 500+ carefully validated sources. Never miss a key signal or new development.</p>
                    </div>
                </div><div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Visual toolbox for strategic foresight
                    </div>
                    <div class="collapse-content">
                        <p>The solution gets you and your team equipped with the world’s leading set of foresight tools, including search & explore trends, horizon scanning, scenario analysis, and so on. Add, modify, import and export content. Everything that a professional foresight team needs.</p>
                    </div>
                </div><div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Rich collaboration tools for teamwork
                    </div>
                    <div class="collapse-content">
                        <p>Foresight is not a one-man show. That’s why we’ve created a rich set of collaboration tools enabling you and your team to share, vote, discuss and co-create your future.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Makers;
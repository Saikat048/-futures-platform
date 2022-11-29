import React from 'react';

const ContactTouch = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center px-36 py-36 gap-10">
            <div className="">
                <h1 className="text-5xl font-bold">GET IN TOUCH</h1>
                <p className="py-6">If you have any questions or enquiries, please don’t hesitate to contact us via email or phone. Our foresight specialists, advisors and futurists are there to help you! </p>
                <p>Further below you will find direct contact forms for sales and support.</p>
            </div>
            <div className="flex justify-center">
                <div>
                    <p className='text-xl font-bold'>Email</p>
                    <span className='underline'>futures@gmail.com</span>
                    <p className='text-xl mt-4 font-bold'>Phone</p>
                    <span className='underline'>+358103257070</span>
                </div>
            </div> 
        </div>
    );
};

export default ContactTouch;
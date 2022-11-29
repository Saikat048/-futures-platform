import React from 'react';
import ContactAbout from './ContactAbout';
import ContactBanner from './ContactBanner';
import ContactSupport from './ContactSupport';
import ContactTouch from './ContactTouch';
import Newsletter from './Newsletter';

const Contact = () => {
    return (
        <div>
           <ContactBanner></ContactBanner>
           <ContactTouch></ContactTouch>
           <ContactSupport></ContactSupport>
           <ContactAbout></ContactAbout>
           <Newsletter></Newsletter>
        </div>
    );
};

export default Contact;
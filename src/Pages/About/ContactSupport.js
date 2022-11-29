import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SupportCart from './SupportCart';

const ContactSupport = () => {

    const [supports, setSupports] = useState([]) 

    useEffect( () => {
        const url = 'contact.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setSupports(data))
    }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-200 gap-10 px-20 py-28'>
            {
                supports.map(support => <SupportCart support={support}></SupportCart>)
            }
        </div>
    );
};

export default ContactSupport;
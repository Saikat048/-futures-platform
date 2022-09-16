import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-700 text-white py-16 px-20 '>
            <div>
                <h5>SOLUTION</h5>
                <li><a href="">Plans and pricing</a></li>
                <li><a href="">Trend analyses by Futurists</a></li>
                <li><a href="">Foresight platform</a></li>
                <li><a href="">Consulting services</a></li>
                <li><a href="">Onboarding & support</a></li> 
            </div>

            <div>
                <h5>RESOURCES</h5>
                <li><a href="">Future Proof Blog</a></li>
                <li><a href="">Foresight Best Practices</a></li>
                <li><a href="">Publications</a></li>
                <li><a href="">Case studies</a></li>
                <li><a href="">Webinars</a></li>
            </div>

            <div>
                <h5>COMPANY</h5>
                <li><a href="">References</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Company news</a></li>
                <li><a href="">Management team</a></li>
                <li><a href="">Contact us</a></li>
            </div>

            <div>
                <h5>CONTACT</h5>
                <li><p>Futures Platform</p></li>
                <li><p>Bulevardi 21</p></li>
                <li><p>Entrance Albertinkatu 25</p></li>
                <li><p>FI-00180 Helsinki</p></li>
                <li><p>Finland</p></li>
                <li><a href="">+358 10 325 7070</a></li>
                <li><a href="">info@futuresplatform.com</a></li>
            </div>
        </div>
    );
};

export default Footer;
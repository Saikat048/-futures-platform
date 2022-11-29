import React from 'react';

const Newsletter = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 py-28'>
            <div className='text-center'>
                <h3>SIGN UP TO OUR NEWSLETTER</h3>
            </div>
            <div className='px-16'>
                <form action="#">
                    <div className="form-control">
                        <label>First name*</label>
                        <input type="text" placeholder="Enter first name" className="input input-bordered w-full mb-5" />
                    </div>


                    <div className="form-control">
                        <label>Last name*</label>
                        <input type="text" placeholder="Enter last name" className="input input-bordered w-full mb-5" />
                    </div>

                    <div className="form-control">
                        <label>Email*</label>
                        <input type="email" placeholder="Enter email" className="input input-bordered w-full  mb-5" />
                    </div>

                    <div className="form-control">
                        <label>Organisation name*</label>
                        <input type="text" placeholder="Enter organisation name" className="input input-bordered w-full mb-5" />
                    </div>

                    <div className="form-control">
                        <label>Phone Number</label>
                        <input type="number" placeholder="Enter number" className="input input-bordered w-full mb-8" />
                    </div>
                    <p>Futures Platform needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our <a className='underline font-bold' href="#">Privacy Policy</a>.</p>

                    <button className="btn btn-primary mt-10">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
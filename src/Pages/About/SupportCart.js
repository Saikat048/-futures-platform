import React from 'react';

const SupportCart = (props) => {
    const { title, description, email, phone, btn } = props.support;
    return (
        // <div className="card lg:card-side bg-base-100 shadow-xl">
        //      <h2 className='mb-8'>{title}</h2>
        //      <p>{description}</p>
        //      <p>{email}</p>
        //      <p>{phone}</p>
        // </div>
        <div className="card w-lg bg-base-100 shadow-xl text-center">
            <div className="card-body">
                <h2 className="mb-8 text-xl font-bold">{title}</h2>
                <p>{description}</p>
                <p className='underline'>{email}</p>
                <p className='underline mb-6'>{phone}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">{btn}</button>
                </div>
            </div>
        </div>
    );
};

export default SupportCart;
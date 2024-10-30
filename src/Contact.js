import React from 'react';

export default function Contact({contactForm}) {
    return (
        <div className='content-area'>
            <h1>Contact List</h1>
            <p>Add the names to the list below</p>
            {contactForm}
        </div>
    );
}

import React from 'react';

function About() {
    return (
        <div style={aboutStyle}>
            <h1>WELCOME TO THE GARAGE STORE COMPANY!</h1>
            <h2>- OUR MISSION - </h2>
            <p>To provide the highest quality to our buyers.</p>
            <h2>Who We Are?</h2>
            <p>Here at The Garage Store we like to provide eco-friendly, resale alternatives to every day products. From shoes to beauty, we have a variety of different products to help make your every day choices kinder to the environment!</p>
            <h2>About Us</h2>
            <p>Krissz (Founder, Developer): " "</p>
            <p>Netti (Frontend Developer) : " I've always been slightly eco conscious but it wasn't until I had my child that I really became hyper aware of all the waste that I was producing, especially every time I threw away disposable nappies and wipes, and what it was doing to the environment (eek!)..."</p>
            <p>Eszkis (Developer): " "</p>
            <p>Omar (DevOps): " "</p>
            <h2>Contact</h2>
            <p>Our mailing address is: 10 Nagymezo Street, 1065 Budapest, GarageStore office</p>
            <p>Phone: 0036701234567</p>
            <p>Email: garage@store.com</p>
        </div>
    );
}

const aboutStyle = {
    marginTop: '90px',
    padding: '30px'
}

export default About;
import React from 'react';
import Common from './Common';
import web from '../src/images/banner2.svg';

const About = () =>
{
    return(
        <Common title='About Us' imgsrc={web} visit="/contact" btname="Contact Us" />
    )
};

export default About;
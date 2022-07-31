import React from 'react';
import Banner from './Banner/Banner';
import BussnessSummry from './BussnessSummry/BussnessSummry';
import Contact from './Contact/Contact';
import Experts from './Experts/Experts';
import Ourclient from './Ourclient/Ourclient';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BussnessSummry />
            <Reviews />
            <Experts />
            <Ourclient />
            <Contact />
        </div>
    );
};

export default Home;
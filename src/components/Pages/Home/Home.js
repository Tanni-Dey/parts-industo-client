import React from 'react';
import Banner from './Banner/Banner';
import BussnessSummry from './BussnessSummry/BussnessSummry';
import Experts from './Experts/Experts';
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
        </div>
    );
};

export default Home;
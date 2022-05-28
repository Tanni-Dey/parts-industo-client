import React from 'react';
import load from '../../../image/loading.gif'

const Loading = () => {
    return (
        <div className='my-20'>
            <img className='w-16 mx-auto' src={load} alt="" />
        </div>
    );
};

export default Loading;
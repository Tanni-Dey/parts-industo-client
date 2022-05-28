import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Part from './Part/Part';

const Parts = () => {

    const { data: parts, isLoading } = useQuery('tools', () => fetch('https://evening-eyrie-81850.herokuapp.com/tool').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-20 px-10 lg:px-20'>
            <h1 className='text-primary font-sans text-3xl lg:text-5xl uppercase'>parts of <span className='text-secondary'>tv</span></h1>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 mt-10'>
                {
                    parts.slice(0, 3).map(part => <Part
                        key={part._id}
                        part={part}
                    />)
                }
            </div>
        </div>
    );
};

export default Parts;
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl font-sans'>Blogs</h2>
            <div className='px-10 md:px-20 text-left pt-10 pb-20 h-full'>
                <h2 className='font-sans text-2xl'>Q1: How will you improve the performance of a React Application ?</h2>
                <p className='font-serif text-xl mb-10'>Ans:
                    <ul>
                        <li>1. We can keep the Components state local to improve the perfomance in react</li>
                        <li>2. Monitoring react components to prevent the re renders.</li>
                        <li>3. Using dynamic import splitting code in react.</li>
                        <li>4. Optimize picture to load images in quick time. </li>
                    </ul>
                </p>
                <h2 className='font-sans text-2xl'>Q2: What are the different ways to manage a state in a React application ?</h2>
                <p className='font-serif text-xl mb-10'>Ans: There are 4 kinds of ways to manage a state in react app.
                    <ul>
                        <li>1.Local state: Local state is data we manage in one or another component.</li>
                        <li>2. global state: Global state is data we manage across multiple components. </li>
                        <li>3.Server state: It comes from another server that should be integrated with thr UI state. </li>
                        <li>4. URL state: The data which are not exist in our url including pathnmae and querry parameters</li>
                    </ul>
                </p>
                <h2 className='font-sans text-2xl'>Q3: How does prototypical inheritance work?</h2>
                <p className='font-serif text-xl mb-10'>Ans:
                    A prototype is a working object instance. When we read a property from object and it is missing, javascript takes it automatically from the prototype. This is called prototypal inheritance. In order to get and set the Prototype of an object, we use Object, getPrototypeOf.
                </p>

                <h2 className='font-sans text-2xl'>Q4: What is a unit test? Why should write unit tests?</h2>
                <p className='font-serif text-xl mb-10'>Ans:
                    Unit tests are the tests which are done by the developers before deploying any application. it is done by the developers because before deploying the application developers want to check that the application is working as there expectation or not.
                </p>
                <p className='font-serif text-xl mb-10'>
                    We should run unit test because it allows us to think actually what has to be done in the application. if we dont write the test maybe the application would not work appropriately and will make bad user experience.
                </p>

                <h2 className='font-sans text-2xl'>Q5: Why we do not set the state directly in React?</h2>
                <p className='font-serif text-xl mb-10'>Ans:
                    We should not update the state directly. Because if we try to set the state directy as a example(products=[]) , then it wont re render the component. We need to use setState (setProducts) because it schedules an update to a component's state object. If the state changes the component then responds by re rendering.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
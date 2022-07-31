import React from 'react';
import emailjs from '@emailjs/browser';
import { TiLocationArrowOutline } from 'react-icons/ti'
import { MdAlternateEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_nxh9h5c', e.target, '7C1BLBwLvSSFQv-_y')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });


        e.target.reset();
    }
    return (
        <div className='mx-10 mt-20 lg:mx-20'>
            <div class="">
                <div class=" grid gap-10 grid-cols-1 md:grid-cols-2 -mb-16">
                    <div class="text-left text-gray-500 font-medium text-lg">
                        <h2 className='text-5xl font-serif text-primary text-left font-bold'>Get <span className='text-secondary'>in Touch</span></h2>
                        <p className='py-5'>Everyone can contact with us with your email</p>

                        <div>
                            <ul>
                                <li className='mb-4 flex items-center'><TiLocationArrowOutline className='text-2xl mr-3 text-secondary' /> <span>1998 Wall Street 707,<br /> Washington DC, USA</span></li>
                                <li className='mb-4 flex items-center'><MdAlternateEmail className='text-2xl mr-3 text-secondary' /><span>partsindusto@gmail.com<br />support@gmail.com</span></li>
                                <li className='mb-4 flex items-center'><BsTelephone className='text-2xl mr-3 text-secondary' /><span>( 84) 0123 456 789<br />( 84) 00123 456 789</span></li>
                            </ul>
                        </div>

                        {/* <img className='' src={contact} alt="" /> */}
                    </div>
                    <div class="card w-full shadow-2xl bg-white">
                        <div class="card-body py-16">
                            <form onSubmit={sendEmail} action="">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your Email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Subject</span>
                                    </label>
                                    <input type="text" name='subject' placeholder="Your Subject" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Message</span>
                                    </label>
                                    <textarea name='message' rows='4' cols='50' type="text" placeholder="Write your Message" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <input type='submit' class="btn btn-primary text-white hover:btn-secondary hover:text-white" value='Send Message' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default Contact;
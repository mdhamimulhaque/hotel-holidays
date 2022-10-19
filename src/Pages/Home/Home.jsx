import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedRoom from '../../components/FeaturedRoom/FeaturedRoom';

const Home = () => {
    return (
        <main>
            <section className="header_top_banner_area bg-blue-50">
                <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                        <svg
                            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                            viewBox="0 0 100 100"
                            fill="currentColor"
                            preserveAspectRatio="none slice"
                        >
                            <path d="M50 0H100L50 100H0L50 0Z" />
                        </svg>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                    </div>
                    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-300">
                                Hotel Holidays Services.
                            </p>
                            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Booking
                                <br className="hidden md:block" />
                                With{' '}
                                <span className="inline-block text-blue-700">
                                    Confidence
                                </span>
                            </h2>
                            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                                Travelers now have access to more content and choice than ever before, making the process of finding the best hotel offers a real challenge. Amadeus Hotel Web Services helps online shoppers find the perfect hotel for the right price – fast.
                            </p>
                            <div className="flex items-center">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container mx-auto my-24'>
                <h2 className='text-3xl font-bold mb-5'>Featured Rooms</h2>
            </section>
        </main>
    );
};

export default Home;
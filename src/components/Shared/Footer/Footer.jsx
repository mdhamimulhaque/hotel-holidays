import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="p-4 bg-blue-200 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hotel Holidays</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms" className="mr-4 hover:underline md:mr-6">Rooms</Link>
                    </li>
                    <li>
                        <Link to="/booking" className="mr-4 hover:underline md:mr-6 ">Booking</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to="/" className="hover:underline">Hotel Holidays</Link>. All Rights Reserved by Md Hamimul Haque.
            </span>
        </footer>

    );
};

export default Footer;
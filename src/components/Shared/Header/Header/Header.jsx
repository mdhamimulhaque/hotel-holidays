import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // ---> handle log out

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("log out successfully")
            }).catch((error) => {
                console.error(error)
            });
    }

    return (
        <header>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 bg-blue-200">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hotel Holidays</span>
                    </Link>
                    <div className="flex md:order-2">
                        {
                            user?.email
                                ? <Link to="/">
                                    <button onClick={handleLogOut} type="button" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none">Log Out</button>
                                </Link>
                                :
                                <div>
                                    <Link to="/registration">
                                        <button type="button" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none">Registration</button>
                                    </Link>

                                    <Link to="/log-in">
                                        <button type="button" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none">Log in</button>
                                    </Link>
                                </div>
                        }



                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/rooms" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Rooms</Link>
                            </li>
                            <li>
                                <Link to="/booking" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Booking</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;
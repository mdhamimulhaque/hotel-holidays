import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Registration = () => {

    const { createUser } = useContext(AuthContext)
    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset();
            })
            .catch(err => {
                console.error(err)
            })

    }


    return (
        <div className="flex flex-col my-24 max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 bg-blue-700 mx-auto text-white">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Registration</h1>
                <p className="text-sm dark:text-gray-400">Registration For Booking</p>
            </div>
            <form
                className="space-y-12 ng-untouched ng-pristine ng-valid"
                onSubmit={handleRegistration}
            >
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md  text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                    <div>
                        <div className="mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900 bg-blue-300  hover:bg-blue-400 ">Registration</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-400">already have an account?
                        <Link rel="noopener noreferrer" to="/log-in" className="hover:underline dark:text-blue-400 ">Login</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Registration;
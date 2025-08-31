
import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                       Create a new account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <Link to="/login" className="font-medium text-ena-yellow hover:text-ena-yellow-dark">
                            sign in to your existing account
                        </Link>
                    </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <form className="space-y-6" action="#" method="POST">
                         <div>
                            <label htmlFor="full-name" className="sr-only">Full Name</label>
                            <input
                                id="full-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow sm:text-sm"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow sm:text-sm"
                                placeholder="Confirm Password"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-ena-yellow hover:bg-ena-yellow-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ena-yellow-dark"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

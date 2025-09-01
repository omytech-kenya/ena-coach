
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const DesktopNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
        <NavLink to={to}>
            {({ isActive }) => (
                <div className={`text-white hover:text-ena-yellow transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium relative group ${isActive ? 'text-ena-yellow' : ''}`}>
                    {children}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-ena-yellow transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </div>
            )}
        </NavLink>
    );

    return (
        <header className="bg-black shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="text-ena-yellow text-2xl font-bold">
                           ENA COACH
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <DesktopNavLink to="/">Home</DesktopNavLink>
                            <DesktopNavLink to="/booking">Booking</DesktopNavLink>
                            <DesktopNavLink to="/parcels">Parcels</DesktopNavLink>
                            <DesktopNavLink to="/routes">Routes</DesktopNavLink>
                            <DesktopNavLink to="/gallery">Gallery</DesktopNavLink>
                            <DesktopNavLink to="/about">About Us</DesktopNavLink>
                            <DesktopNavLink to="/contact">Contact</DesktopNavLink>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-2">
                             <NavLink to="/login" className="bg-transparent text-white hover:bg-ena-yellow hover:text-black border border-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">Login</NavLink>
                             <NavLink to="/signup" className="bg-ena-yellow text-black hover:bg-ena-yellow-dark px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">Sign Up</NavLink>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-700 shadow-lg`} id="mobile-menu">
                <div className="px-4 py-3 space-y-2">
                    <NavLink to="/" className={({ isActive }) => `block transition-colors duration-300 px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-ena-yellow bg-ena-yellow/10 border-l-4 border-ena-yellow' : 'text-white hover:text-ena-yellow hover:bg-gray-800'}`}>Home</NavLink>
                    <NavLink to="/booking" className={({ isActive }) => `block transition-colors duration-300 px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-ena-yellow bg-ena-yellow/10 border-l-4 border-ena-yellow' : 'text-white hover:text-ena-yellow hover:bg-gray-800'}`}>Booking</NavLink>
                    <NavLink to="/parcels" className={({ isActive }) => `block transition-colors duration-300 px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-ena-yellow bg-ena-yellow/10 border-l-4 border-ena-yellow' : 'text-white hover:text-ena-yellow hover:bg-gray-800'}`}>Parcels</NavLink>
                    <NavLink to="/routes" className={({ isActive }) => `block transition-colors duration-300 px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-ena-yellow bg-ena-yellow/10 border-l-4 border-ena-yellow' : 'text-white hover:text-ena-yellow hover:bg-gray-800'}`}>Routes</NavLink>
                    <NavLink to="/gallery" className={({ isActive }) => `block transition-colors duration-300 px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-ena-yellow bg-ena-yellow/10 border-l-4 border-ena-yellow' : 'text-white hover:text-ena-yellow hover:bg-gray-800'}`}>Gallery</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `block transition-colors duration-300 px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-ena-yellow bg-ena-yellow/10 border-l-4 border-ena-yellow' : 'text-white hover:text-ena-yellow hover:bg-gray-800'}`}>About Us</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `block transition-colors duration-300 px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-ena-yellow bg-ena-yellow/10 border-l-4 border-ena-yellow' : 'text-white hover:text-ena-yellow hover:bg-gray-800'}`}>Contact</NavLink>
                </div>
                <div className="px-4 py-4 border-t border-gray-700 bg-gray-900">
                    <div className="flex flex-col space-y-3">
                         <NavLink to="/login" className="w-full text-center bg-transparent text-white hover:bg-ena-yellow hover:text-black border border-white px-4 py-3 rounded-full text-base font-medium transition-colors duration-300">Login</NavLink>
                         <NavLink to="/signup" className="w-full text-center bg-ena-yellow text-black hover:bg-ena-yellow-dark px-4 py-3 rounded-full text-base font-medium transition-colors duration-300">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

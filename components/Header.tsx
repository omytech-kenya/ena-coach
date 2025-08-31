
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClasses = "text-white hover:text-ena-yellow transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
    const activeNavLinkClasses = "text-ena-yellow";

    const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
        isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses;

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
                            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                            <NavLink to="/booking" className={getNavLinkClass}>Booking</NavLink>
                            <NavLink to="/parcels" className={getNavLinkClass}>Parcels</NavLink>
                            <NavLink to="/routes" className={getNavLinkClass}>Routes</NavLink>
                            <NavLink to="/gallery" className={getNavLinkClass}>Gallery</NavLink>
                            <NavLink to="/about" className={getNavLinkClass}>About Us</NavLink>
                            <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
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

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                    <NavLink to="/booking" className={getNavLinkClass}>Booking</NavLink>
                    <NavLink to="/parcels" className={getNavLinkClass}>Parcels</NavLink>
                    <NavLink to="/routes" className={getNavLinkClass}>Routes</NavLink>
                    <NavLink to="/gallery" className={getNavLinkClass}>Gallery</NavLink>
                    <NavLink to="/about" className={getNavLinkClass}>About Us</NavLink>
                    <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5 space-x-2">
                         <NavLink to="/login" className="w-full text-center bg-transparent text-white hover:bg-ena-yellow hover:text-black border border-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">Login</NavLink>
                         <NavLink to="/signup" className="w-full text-center bg-ena-yellow text-black hover:bg-ena-yellow-dark px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

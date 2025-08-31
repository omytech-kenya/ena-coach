
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, TikTokIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About ENA */}
                    <div>
                        <h3 className="text-ena-yellow text-lg font-bold mb-4">ENA COACH</h3>
                        <p className="text-gray-400 text-sm">
                            Travel in comfort and safety with ENA Coach. We are committed to providing reliable and affordable transport solutions across the country.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/booking" className="text-gray-400 hover:text-ena-yellow transition-colors">Book a Ticket</Link></li>
                            <li><Link to="/parcels" className="text-gray-400 hover:text-ena-yellow transition-colors">Send a Parcel</Link></li>
                            <li><Link to="/routes" className="text-gray-400 hover:text-ena-yellow transition-colors">Our Routes</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-ena-yellow transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-ena-yellow transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Nairobi Head Office</li>
                            <li>+254 709 892 000</li>
                            <li>info@enacoach.co.ke</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-ena-yellow transition-colors"><FacebookIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-ena-yellow transition-colors"><TwitterIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-ena-yellow transition-colors"><InstagramIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-ena-yellow transition-colors"><TikTokIcon /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ENA Coach. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

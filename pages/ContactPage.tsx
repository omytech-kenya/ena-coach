
import React from 'react';
import { PhoneIcon, EnvelopeIcon, LocationMarkerIcon } from '../components/icons/FeatureIcons';
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsappIcon } from '../components/icons/SocialIcons';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900">Get in Touch</h1>
                    <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Please fill out the form below or contact us through our other channels.</p>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"></textarea>
                            </div>
                             <button type="submit" className="w-full bg-ena-yellow text-black font-bold py-3 px-4 rounded-lg shadow-md hover:bg-ena-yellow-dark transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-black text-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-ena-yellow mb-6">Contact Information</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <LocationMarkerIcon className="w-6 h-6 text-ena-yellow mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Nairobi Head Office</h3>
                                    <p className="text-gray-300">KPCU Building, Wakulima Lane</p>
                                </div>
                            </div>
                             <div className="flex items-center">
                                <PhoneIcon className="w-6 h-6 text-ena-yellow mr-3" />
                                <p className="text-gray-300">+254 709 892 000</p>
                            </div>
                            <div className="flex items-center">
                                <EnvelopeIcon className="w-6 h-6 text-ena-yellow mr-3" />
                                <p className="text-gray-300">info@enacoach.co.ke</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-700">
                             <h3 className="font-semibold mb-4 text-ena-yellow">Follow Us</h3>
                             <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-ena-yellow transition-colors"><FacebookIcon /></a>
                                <a href="#" className="text-gray-300 hover:text-ena-yellow transition-colors"><TwitterIcon /></a>
                                <a href="#" className="text-gray-300 hover:text-ena-yellow transition-colors"><InstagramIcon /></a>
                                <a href="#" className="text-gray-300 hover:text-ena-yellow transition-colors"><WhatsappIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

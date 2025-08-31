
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-black text-white">
                <img src="https://picsum.photos/1920/600?bus,team" alt="ENA Coach Team" className="w-full h-80 object-cover opacity-50"/>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-extrabold text-center">About ENA Coach</h1>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
                            <p className="text-gray-600 mb-4">
                                Founded with a vision to revolutionize public transport, ENA Coach started its journey with a small fleet of buses and a grand ambition. Our goal was simple: to provide a safe, comfortable, and reliable travel experience for everyone.
                            </p>
                            <p className="text-gray-600">
                                Over the years, we have grown into one of the most trusted names in the industry, expanding our routes and modernizing our fleet. Our commitment to customer satisfaction and safety remains at the core of everything we do.
                            </p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/600/400?bus,vintage" alt="Vintage Bus" className="rounded-2xl shadow-lg w-full"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                        Our values guide our actions and define who we are as a company.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-2xl shadow-lg">
                            <h3 className="font-bold text-xl mb-2 text-ena-yellow">Safety</h3>
                            <p className="text-gray-600">The well-being of our passengers and staff is our highest priority.</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-lg">
                            <h3 className="font-bold text-xl mb-2 text-ena-yellow">Reliability</h3>
                            <p className="text-gray-600">We are committed to punctuality and dependable service.</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-lg">
                            <h3 className="font-bold text-xl mb-2 text-ena-yellow">Customer Focus</h3>
                            <p className="text-gray-600">We listen to our customers and strive to exceed their expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Fleet & Team</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         <img src="https://picsum.photos/400/300?bus,modern" alt="Modern Bus" className="rounded-2xl shadow-lg w-full h-64 object-cover"/>
                         <img src="https://picsum.photos/400/300?people,smiling,driver" alt="ENA Coach Driver" className="rounded-2xl shadow-lg w-full h-64 object-cover"/>
                         <img src="https://picsum.photos/400/300?bus,interior" alt="Bus Interior" className="rounded-2xl shadow-lg w-full h-64 object-cover"/>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

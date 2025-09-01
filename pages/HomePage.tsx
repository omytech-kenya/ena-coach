
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingWidget from '../components/BookingWidget';
import FeatureCard from '../components/FeatureCard';
import { SafetyIcon, ComfortIcon, PunctualityIcon, LogisticsIcon, LocationMarkerIcon, CalendarIcon, UsersIcon, WifiIcon, CoffeeIcon, CreditCardIcon, MapIcon } from '../components/icons/FeatureIcons';
import { SCHEDULES } from '../constants';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [nextDepartures, setNextDepartures] = useState(SCHEDULES.slice(0, 3));

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update every minute
        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: string) => {
        return time;
    };

    return (
        <div className="min-h-screen">
                        {/* Enhanced Hero Section */}
            <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 overflow-hidden">
                {/* Background Video/Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                     style={{ backgroundImage: "url('/ena12.png')" }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-20 right-10 w-32 h-32 bg-ena-yellow/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-start justify-start min-h-screen text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 sm:pt-8 lg:pt-16 pb-8 sm:pb-20 lg:pb-28">
                    <div className="max-w-4xl lg:max-w-3xl">
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-ena-yellow/20 backdrop-blur-sm rounded-full border border-ena-yellow/30 mb-6 sm:mb-8">
                            <span className="text-ena-yellow text-sm sm:text-base font-semibold">🚌 Kenya's Premier Transport Service</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ena-yellow to-orange-400">
                                Travel
                            </span>
                            <br />
                            <span className="text-white">in Luxury</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
                            Experience premium comfort, safety, and reliability across Kenya's most beautiful destinations. 
                            Your journey begins with ENA Coach.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                            <button onClick={() => navigate('/booking')} 
                                    className="group bg-gradient-to-r from-ena-yellow to-orange-400 text-black font-bold py-3 sm:py-4 lg:py-4 px-6 sm:px-8 lg:px-10 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:shadow-ena-yellow/25 transition-all duration-300 transform hover:scale-105 hover:from-orange-400 hover:to-ena-yellow w-full sm:w-auto">
                                <span className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    <span className="hidden sm:inline">Book Your Journey</span>
                                    <span className="sm:hidden">Book Now</span>
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                            <button onClick={() => navigate('/routes')} 
                                    className="group bg-white/10 backdrop-blur-md text-white font-bold py-3 sm:py-4 lg:py-4 px-6 sm:px-8 lg:px-10 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                                <span className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    <span className="hidden sm:inline">Explore Routes</span>
                                    <span className="sm:hidden">Routes</span>
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H9" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Departure Board - Now as a separate section */}
            <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 border border-gray-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">🚀 Next Departures</h2>
                                <p className="text-gray-600 text-sm sm:text-base">Real-time schedule updates</p>
                            </div>
                            <div className="text-center sm:text-right">
                                <div className="text-xl sm:text-2xl font-bold text-ena-yellow">
                                    {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500">Current Time</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {nextDepartures.map((schedule) => (
                                <div key={schedule.id} className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-ena-yellow/30 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-ena-yellow rounded-full"></div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-base sm:text-lg">{schedule.route.from} → {schedule.route.to}</p>
                                                <p className="text-gray-600 text-xs sm:text-sm">Daily Route</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 sm:space-y-3">
                                        <div className="flex justify-between text-xs sm:text-sm">
                                            <span className="text-gray-600">Departure:</span>
                                            <span className="font-semibold text-gray-900">{formatTime(schedule.departureTime)}</span>
                                        </div>
                                        <div className="flex justify-between text-xs sm:text-sm">
                                            <span className="text-gray-600">Price:</span>
                                            <span className="font-bold text-ena-yellow text-base sm:text-lg">KSH {schedule.price.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-xs sm:text-sm">
                                            <span className="text-gray-600">Available:</span>
                                            <span className="font-semibold text-gray-900">{schedule.seatsAvailable} seats</span>
                                        </div>
                                    </div>
                                    <button onClick={() => navigate('/booking')} 
                                            className="w-full mt-3 sm:mt-4 bg-ena-yellow text-black font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl hover:bg-orange-400 transition-colors duration-300 text-sm sm:text-base">
                                        Book This Route
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Booking Widget */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <BookingWidget />
            </div>

            {/* Statistics Section */}
            <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-ena-yellow to-orange-400">Millions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join thousands of satisfied customers who choose ENA Coach for their daily journeys
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-6xl font-black text-ena-yellow mb-2">50+</div>
                            <div className="text-gray-600 font-medium">Routes Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-6xl font-black text-ena-yellow mb-2">100K+</div>
                            <div className="text-gray-600 font-medium">Happy Customers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-6xl font-black text-ena-yellow mb-2">24/7</div>
                            <div className="text-gray-600 font-medium">Support Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-6xl font-black text-ena-yellow mb-2">99%</div>
                            <div className="text-gray-600 font-medium">On-Time Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Features Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose ENA Coach?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're not just a transport company - we're your travel partner, committed to excellence in every journey
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard 
                            icon={<SafetyIcon />}
                            title="Premium Safety"
                            description="State-of-the-art safety systems, certified drivers, and regular vehicle inspections ensure your peace of mind."
                        />
                        <FeatureCard 
                            icon={<ComfortIcon />}
                            title="Luxury Comfort"
                            description="Premium leather seats, climate control, and entertainment systems make every journey a pleasure."
                        />
                        <FeatureCard 
                            icon={<PunctualityIcon />}
                            title="Punctual Service"
                            description="Our commitment to timeliness means you'll never miss important appointments or connections."
                        />
                        <FeatureCard 
                            icon={<LogisticsIcon />}
                            title="Smart Logistics"
                            description="Advanced parcel tracking and secure delivery across our extensive network."
                        />
                    </div>
                </div>
            </div>

            {/* Onboard Amenities Section */}
            <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ena-yellow to-orange-400">
                                Premium
                            </span> Onboard Experience
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Every detail is crafted for your comfort and convenience
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="bg-ena-yellow/20 rounded-2xl p-8 mb-6 group-hover:bg-ena-yellow/30 transition-all duration-300">
                                <WifiIcon className="w-16 h-16 text-ena-yellow mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Free Wi-Fi</h3>
                            <p className="text-gray-300">Stay connected with high-speed internet throughout your journey</p>
                        </div>
                        <div className="text-center group">
                            <div className="bg-ena-yellow/20 rounded-2xl p-8 mb-6 group-hover:bg-ena-yellow/30 transition-all duration-300">
                                <CoffeeIcon className="w-16 h-16 text-ena-yellow mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Refreshments</h3>
                            <p className="text-gray-300">Complimentary coffee, tea, and snacks for your comfort</p>
                        </div>
                        <div className="text-center group">
                            <div className="bg-ena-yellow/20 rounded-2xl p-8 mb-6 group-hover:bg-ena-yellow/30 transition-all duration-300">
                                <CreditCardIcon className="w-16 h-16 text-ena-yellow mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Cashless Payment</h3>
                            <p className="text-gray-300">Secure digital payments for onboard purchases and services</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Routes Showcase */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Popular Routes</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our most loved destinations and plan your next adventure
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SCHEDULES.slice(0, 6).map((schedule) => (
                            <div key={schedule.id} 
                                 className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-ena-yellow/30">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <MapIcon className="w-8 h-8 text-ena-yellow" />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">
                                                {schedule.route.from} → {schedule.route.to}
                                            </h3>
                                            <p className="text-gray-600 text-sm">Daily Departures</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Departure:</span>
                                        <span className="font-semibold">{schedule.departureTime}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Arrival:</span>
                                        <span className="font-semibold">{schedule.arrivalTime}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Price:</span>
                                        <span className="font-bold text-ena-yellow">KSH {schedule.price.toLocaleString()}</span>
                                    </div>
                                </div>
                                
                                <button onClick={() => navigate('/booking')} 
                                        className="w-full bg-ena-yellow text-black font-bold py-3 px-4 rounded-xl hover:bg-orange-400 transition-colors duration-300">
                                    Book This Route
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="py-20 bg-gradient-to-r from-ena-yellow to-orange-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust ENA Coach for their travel needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => navigate('/booking')} 
                                className="bg-black text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-800 transition-colors duration-300">
                            Book Your Trip Now
                        </button>
                        <button onClick={() => navigate('/contact')} 
                                className="bg-transparent text-black font-bold py-4 px-8 rounded-xl text-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

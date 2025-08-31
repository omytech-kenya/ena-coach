
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingWidget from '../components/BookingWidget';
import FeatureCard from '../components/FeatureCard';
import { ShieldCheckIcon, SparklesIcon, ClockIcon, CubeTransparentIcon } from '../components/icons/FeatureIcons';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-96 md:h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?bus,road')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Travel in Comfort with ENA Coach</h1>
                    <p className="text-lg md:text-xl max-w-2xl mb-8">Your trusted partner for safe, reliable, and comfortable journeys across the nation.</p>
                    <button onClick={() => navigate('/booking')} className="bg-ena-yellow text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-ena-yellow-dark transition-transform transform hover:scale-105 duration-300">
                        Book Now
                    </button>
                </div>
            </div>

            {/* Booking Widget */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <BookingWidget />
            </div>

            {/* Features Section */}
            <div className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Choose ENA Coach?</h2>
                        <p className="mt-4 text-lg text-gray-600">We are dedicated to making your travel experience exceptional.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard 
                            icon={<ShieldCheckIcon />}
                            title="Safety First"
                            description="Our buses are regularly inspected and our drivers are highly trained to ensure your safety on the road."
                        />
                        <FeatureCard 
                            icon={<SparklesIcon />}
                            title="Utmost Comfort"
                            description="Travel in our modern, clean buses with comfortable seating, ample legroom, and on-board amenities."
                        />
                        <FeatureCard 
                            icon={<ClockIcon />}
                            title="Reliable & Punctual"
                            description="We value your time. Our services are punctual, ensuring you reach your destination on schedule."
                        />
                        <FeatureCard 
                            icon={<CubeTransparentIcon />}
                            title="Parcel Delivery"
                            description="Send and receive parcels quickly and securely with our extensive network across the country."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

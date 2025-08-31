
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CITIES } from '../constants';
import { LocationMarkerIcon, CalendarIcon, UsersIcon } from './icons/FeatureIcons';

const BookingWidget: React.FC = () => {
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/booking');
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg -mt-16 relative z-10 max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="w-full">
                    <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">From</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <LocationMarkerIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <select id="from" name="from" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow">
                            {CITIES.map(city => <option key={city}>{city}</option>)}
                        </select>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">To</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <LocationMarkerIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <select id="to" name="to" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow">
                           {CITIES.slice().reverse().map(city => <option key={city}>{city}</option>)}
                        </select>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                             <CalendarIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input type="date" id="date" name="date" defaultValue={new Date().toISOString().substring(0, 10)} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow" />
                    </div>
                </div>
                <div className="w-full">
                    <button type="submit" className="w-full bg-ena-yellow text-black font-bold py-2 px-4 rounded-lg shadow-md hover:bg-ena-yellow-dark transition-colors duration-300 h-full flex items-center justify-center">
                        Search Bus
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingWidget;

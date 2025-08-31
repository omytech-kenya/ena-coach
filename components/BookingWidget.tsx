
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
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl max-w-5xl mx-auto border border-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Plan Your Journey</h2>
                <p className="text-gray-600 text-lg">Find the perfect route and book your seat in minutes</p>
            </div>
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                <div className="w-full">
                    <label htmlFor="from" className="block text-sm font-semibold text-gray-800 mb-2">From</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <LocationMarkerIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <select id="from" name="from" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-ena-yellow focus:border-ena-yellow transition-all duration-300 hover:border-gray-400">
                            {CITIES.map(city => <option key={city}>{city}</option>)}
                        </select>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="to" className="block text-sm font-semibold text-gray-800 mb-2">To</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <LocationMarkerIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <select id="to" name="to" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-ena-yellow focus:border-ena-yellow transition-all duration-300 hover:border-gray-400">
                           {CITIES.slice().reverse().map(city => <option key={city}>{city}</option>)}
                        </select>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-800 mb-2">Date</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                             <CalendarIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input type="date" id="date" name="date" defaultValue={new Date().toISOString().substring(0, 10)} className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-ena-yellow focus:border-ena-yellow transition-all duration-300 hover:border-gray-400" />
                    </div>
                </div>
                <div className="w-full">
                                            <button type="submit" className="w-full bg-gradient-to-r from-ena-yellow to-orange-400 text-black font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex items-center justify-center group hover:scale-105">
                            <span className="flex items-center gap-2">
                                Search Routes
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </button>
                </div>
            </form>
        </div>
    );
};

export default BookingWidget;

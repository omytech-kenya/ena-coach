
import React, { useState, useMemo } from 'react';
import { SCHEDULES, CITIES } from '../constants';

const RoutesPage: React.FC = () => {
    const [fromFilter, setFromFilter] = useState('');
    const [toFilter, setToFilter] = useState('');

    const filteredSchedules = useMemo(() => {
        return SCHEDULES.filter(schedule => {
            const fromMatch = fromFilter ? schedule.route.from === fromFilter : true;
            const toMatch = toFilter ? schedule.route.to === toFilter : true;
            return fromMatch && toMatch;
        });
    }, [fromFilter, toFilter]);

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-center mb-8">Routes & Schedules</h1>

                {/* Filters */}
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 flex flex-col sm:flex-row gap-4">
                    <select value={fromFilter} onChange={(e) => setFromFilter(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow">
                        <option value="">All Origins</option>
                        {CITIES.map(c => <option key={`from-${c}`} value={c}>{c}</option>)}
                    </select>
                    <select value={toFilter} onChange={(e) => setToFilter(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow">
                        <option value="">All Destinations</option>
                        {CITIES.map(c => <option key={`to-${c}`} value={c}>{c}</option>)}
                    </select>
                    <button onClick={() => { setFromFilter(''); setToFilter(''); }} className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                        Reset
                    </button>
                </div>

                {/* Schedule Table */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredSchedules.map(schedule => (
                                    <tr key={schedule.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{schedule.route.from} &rarr; {schedule.route.to}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule.departureTime}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule.arrivalTime}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">KSH {schedule.price.toLocaleString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#/booking" className="text-ena-yellow hover:text-ena-yellow-dark">Book Now</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Map View */}
                <div className="mt-12">
                    <h2 className="text-3xl font-extrabold text-center mb-6">Our Destinations</h2>
                    <div className="bg-white p-4 rounded-2xl shadow-lg">
                        <img src="https://picsum.photos/1200/600?map,kenya" alt="Map of ENA Coach destinations" className="w-full h-auto rounded-xl object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoutesPage;

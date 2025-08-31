
import React from 'react';
import { CITIES } from '../constants';

const ParcelPage: React.FC = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-center mb-12">Parcel Services</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Book Parcel */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Book a Parcel Delivery</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">Sender's Name</label>
                                <input type="text" id="senderName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"/>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="fromCity" className="block text-sm font-medium text-gray-700">From</label>
                                    <select id="fromCity" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow">
                                        {CITIES.map(city => <option key={`from-${city}`}>{city}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="toCity" className="block text-sm font-medium text-gray-700">To</label>
                                    <select id="toCity" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow">
                                        {CITIES.slice().reverse().map(city => <option key={`to-${city}`}>{city}</option>)}
                                    </select>
                                </div>
                            </div>
                             <div>
                                <label htmlFor="receiverName" className="block text-sm font-medium text-gray-700">Receiver's Name</label>
                                <input type="text" id="receiverName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"/>
                            </div>
                             <div>
                                <label htmlFor="receiverPhone" className="block text-sm font-medium text-gray-700">Receiver's Phone</label>
                                <input type="tel" id="receiverPhone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"/>
                            </div>
                            <div>
                                <label htmlFor="parcelDesc" className="block text-sm font-medium text-gray-700">Parcel Description</label>
                                <textarea id="parcelDesc" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-ena-yellow text-black font-bold py-3 px-4 rounded-lg shadow-md hover:bg-ena-yellow-dark transition-colors">
                                Get Quote
                            </button>
                        </form>
                    </div>

                    {/* Track Parcel */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Track Your Parcel</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="waybill" className="block text-sm font-medium text-gray-700">Enter Waybill Number</label>
                                <input type="text" id="waybill" placeholder="e.g., ENA123456789" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"/>
                            </div>
                             <button type="submit" className="w-full bg-black text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-gray-800 transition-colors">
                                Track Parcel
                            </button>
                        </form>
                        <div className="mt-8 pt-6 border-t">
                           <h3 className="font-semibold text-lg mb-2">Tracking Status</h3>
                           <p className="text-gray-500">Enter a valid waybill number to see tracking information.</p>
                           {/* Example status */}
                           {/* 
                           <div className="mt-4 space-y-2">
                                <p><span className="font-semibold">Status:</span> In Transit</p>
                                <p><span className="font-semibold">Current Location:</span> Nakuru</p>
                                <p><span className="font-semibold">Expected Delivery:</span> Today, 5:00 PM</p>
                           </div>
                           */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParcelPage;

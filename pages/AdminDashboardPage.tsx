
import React from 'react';

const StatCard: React.FC<{ title: string; value: string; icon: string }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-between">
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div className="bg-ena-yellow text-black rounded-full p-3">
            <span className="text-2xl">{icon}</span>
        </div>
    </div>
);

const AdminDashboardPage: React.FC = () => {
    return (
        <div>
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard title="Total Bookings" value="1,250" icon="🎫" />
                <StatCard title="Active Buses" value="45" icon="🚌" />
                <StatCard title="Total Routes" value="12" icon="🗺️" />
                <StatCard title="New Messages" value="8" icon="✉️" />
            </div>

            {/* Recent Bookings Table */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Recent Bookings</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                         <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Passenger</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                <td className="px-6 py-4 whitespace-nowrap">Nairobi - Mombasa</td>
                                <td className="px-6 py-4 whitespace-nowrap">2024-08-15</td>
                                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span></td>
                            </tr>
                             <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                                <td className="px-6 py-4 whitespace-nowrap">Kisumu - Nairobi</td>
                                <td className="px-6 py-4 whitespace-nowrap">2024-08-14</td>
                                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;

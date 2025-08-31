
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const navLinkClass = "flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700";
    const activeNavLinkClass = "bg-gray-700";
    
    const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass;
        
    return (
        <div className="flex flex-col w-64 bg-gray-800">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <span className="text-white font-bold uppercase">ENA Admin</span>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800">
                    <NavLink to="/admin" end className={getNavLinkClass}>Dashboard</NavLink>
                    <NavLink to="/admin/bookings" className={getNavLinkClass}>Bookings</NavLink>
                    <NavLink to="/admin/buses" className={getNavLinkClass}>Buses</NavLink>
                    <NavLink to="/admin/routes" className={getNavLinkClass}>Routes</NavLink>
                    <NavLink to="/admin/reports" className={getNavLinkClass}>Reports</NavLink>
                    <NavLink to="/admin/messages" className={getNavLinkClass}>Messages</NavLink>
                    <NavLink to="/" className={navLinkClass}>Back to Site</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;

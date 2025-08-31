
import React from 'react';
import Sidebar from '../components/Sidebar';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center p-4 bg-white border-b">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                    <div>
                        <span className="text-gray-600">Welcome, Admin</span>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;

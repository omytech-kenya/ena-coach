
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ParcelPage from './pages/ParcelPage';
import RoutesPage from './pages/RoutesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
                <Route path="/booking" element={<MainLayout><BookingPage /></MainLayout>} />
                <Route path="/parcels" element={<MainLayout><ParcelPage /></MainLayout>} />
                <Route path="/routes" element={<MainLayout><RoutesPage /></MainLayout>} />
                <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
                <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
                <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
                <Route path="/signup" element={<MainLayout><SignupPage /></MainLayout>} />
                
                <Route path="/admin" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
            </Routes>
        </HashRouter>
    );
};

export default App;

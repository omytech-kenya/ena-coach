
import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-ena-yellow/30">
            <div className="text-ena-yellow bg-gradient-to-br from-black to-gray-800 rounded-2xl p-6 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-ena-yellow transition-colors duration-300">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;

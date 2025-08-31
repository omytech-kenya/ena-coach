
import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="text-ena-yellow bg-black rounded-full p-4 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;

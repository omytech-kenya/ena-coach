
import React, { useState, useEffect } from 'react';
import type { Seat } from '../types';
import { SeatIcon } from './icons/FeatureIcons';

interface SeatLayoutProps {
  totalSeats: number;
  onSeatsSelected: (selectedSeats: Seat[]) => void;
}

const generateSeats = (count: number): Seat[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: `seat-${i + 1}`,
        number: `${i + 1}`,
        isBooked: Math.random() < 0.3, // 30% chance of being booked
    }));
};

const SeatLayout: React.FC<SeatLayoutProps> = ({ totalSeats, onSeatsSelected }) => {
    const [seats, setSeats] = useState<Seat[]>([]);
    const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

    useEffect(() => {
        setSeats(generateSeats(totalSeats));
    }, [totalSeats]);

    const handleSeatClick = (seatId: string) => {
        const seat = seats.find(s => s.id === seatId);
        if (!seat || seat.isBooked) return;

        const newSelectedSeats = new Set(selectedSeats);
        if (newSelectedSeats.has(seatId)) {
            newSelectedSeats.delete(seatId);
        } else {
            newSelectedSeats.add(seatId);
        }
        setSelectedSeats(newSelectedSeats);
        
        const selectedSeatObjects = seats.filter(s => newSelectedSeats.has(s.id));
        onSeatsSelected(selectedSeatObjects);
    };
    
    const getSeatClass = (seat: Seat) => {
        if (seat.isBooked) return 'text-gray-400 cursor-not-allowed';
        if (selectedSeats.has(seat.id)) return 'text-ena-yellow scale-110';
        return 'text-gray-700 hover:text-ena-yellow cursor-pointer';
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
             <h3 className="text-xl font-bold mb-4 text-center">Select Your Seat</h3>
             <div className="flex justify-center mb-4 space-x-4 text-sm">
                <div className="flex items-center"><SeatIcon className="w-5 h-5 text-gray-700 mr-2"/> Available</div>
                <div className="flex items-center"><SeatIcon className="w-5 h-5 text-ena-yellow mr-2"/> Selected</div>
                <div className="flex items-center"><SeatIcon className="w-5 h-5 text-gray-400 mr-2"/> Booked</div>
            </div>
            <div className="grid grid-cols-5 gap-2 max-w-xs mx-auto">
                {seats.map((seat, index) => (
                    <React.Fragment key={seat.id}>
                       {index % 4 === 2 && <div className="col-span-1"></div>}
                       <button
                           onClick={() => handleSeatClick(seat.id)}
                           disabled={seat.isBooked}
                           className={`transition-transform duration-200 ${getSeatClass(seat)}`}
                           aria-label={`Seat ${seat.number}`}
                       >
                           <SeatIcon className="w-10 h-10" />
                       </button>
                   </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SeatLayout;


import React, { useState } from 'react';
import { SCHEDULES } from '../constants';
import type { Schedule, Seat } from '../types';
import SeatLayout from '../components/SeatLayout';

type BookingStep = 'search' | 'seats' | 'details';

const BusSearchResult: React.FC<{ schedule: Schedule, onSelect: (schedule: Schedule) => void }> = ({ schedule, onSelect }) => (
    <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
            <p className="font-bold text-lg">{schedule.route.from} to {schedule.route.to}</p>
            <p className="text-sm text-gray-600">Departure: <span className="font-semibold text-black">{schedule.departureTime}</span></p>
            <p className="text-sm text-gray-600">Arrival: <span className="font-semibold text-black">{schedule.arrivalTime}</span></p>
        </div>
        <div className="text-center">
            <p className="text-lg font-bold text-ena-yellow">KSH {schedule.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{schedule.seatsAvailable} seats left</p>
        </div>
        <button onClick={() => onSelect(schedule)} className="bg-ena-yellow text-black font-bold py-2 px-6 rounded-lg shadow-md hover:bg-ena-yellow-dark transition-colors w-full sm:w-auto">
            Select Seats
        </button>
    </div>
);


const CheckoutForm: React.FC<{ selectedSeats: Seat[], schedule: Schedule }> = ({ selectedSeats, schedule }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Passenger Details</h3>
                <div className="space-y-6">
                    {selectedSeats.map(seat => (
                         <div key={seat.id} className="bg-white p-4 rounded-2xl shadow-md">
                             <p className="font-bold mb-2">Seat {seat.number}</p>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"/>
                                 <input type="tel" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-ena-yellow focus:border-ena-yellow"/>
                             </div>
                         </div>
                    ))}
                </div>
            </div>
            <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
                    <div className="space-y-2 border-b pb-4 mb-4">
                        <p className="flex justify-between"><span>Route:</span> <span className="font-semibold">{schedule.route.from} - {schedule.route.to}</span></p>
                        <p className="flex justify-between"><span>Seats:</span> <span className="font-semibold">{selectedSeats.map(s => s.number).join(', ')}</span></p>
                        <p className="flex justify-between"><span>Price per seat:</span> <span className="font-semibold">KSH {schedule.price.toLocaleString()}</span></p>
                    </div>
                     <div className="flex justify-between font-extrabold text-lg">
                        <span>Total:</span>
                        <span className="text-ena-yellow">KSH {(schedule.price * selectedSeats.length).toLocaleString()}</span>
                    </div>
                     <button className="w-full mt-6 bg-ena-yellow text-black font-bold py-3 px-4 rounded-lg shadow-md hover:bg-ena-yellow-dark transition-colors">
                        Confirm & Pay
                    </button>
                </div>
            </div>
        </div>
    );
};


const BookingPage: React.FC = () => {
    const [step, setStep] = useState<BookingStep>('search');
    const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

    const handleBusSelect = (schedule: Schedule) => {
        setSelectedSchedule(schedule);
        setStep('seats');
    };
    
    const handleSeatsSelected = (seats: Seat[]) => {
        setSelectedSeats(seats);
    };

    const proceedToDetails = () => {
        if (selectedSeats.length > 0) {
            setStep('details');
        } else {
            alert('Please select at least one seat.');
        }
    };
    
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-center mb-8">Book Your Trip</h1>

                {step === 'search' && (
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {SCHEDULES.map(schedule => (
                            <BusSearchResult key={schedule.id} schedule={schedule} onSelect={handleBusSelect} />
                        ))}
                    </div>
                )}

                {step === 'seats' && selectedSchedule && (
                     <div className="max-w-3xl mx-auto">
                        <button onClick={() => setStep('search')} className="mb-4 text-sm text-ena-yellow hover:underline">&larr; Back to search results</button>
                        <SeatLayout totalSeats={selectedSchedule.totalSeats} onSeatsSelected={handleSeatsSelected} />
                        <div className="mt-6 text-center">
                             <p className="mb-4 font-semibold">Selected seats: {selectedSeats.map(s => s.number).join(', ') || 'None'}</p>
                            <button 
                                onClick={proceedToDetails} 
                                disabled={selectedSeats.length === 0}
                                className="bg-ena-yellow text-black font-bold py-3 px-8 rounded-lg shadow-md hover:bg-ena-yellow-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
                                Proceed to Details
                            </button>
                        </div>
                    </div>
                )}
                
                {step === 'details' && selectedSchedule && selectedSeats.length > 0 && (
                     <div>
                        <button onClick={() => setStep('seats')} className="mb-4 text-sm text-ena-yellow hover:underline">&larr; Change seats</button>
                        <CheckoutForm selectedSeats={selectedSeats} schedule={selectedSchedule} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingPage;

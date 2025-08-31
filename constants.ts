
import type { Route, Schedule } from './types';

export const CITIES: string[] = [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Malindi", "Kitale", "Garissa", "Kakamega"
];

export const ROUTES: Route[] = [
    { id: 1, from: "Nairobi", to: "Mombasa" },
    { id: 2, from: "Nairobi", to: "Kisumu" },
    { id: 3, from: "Mombasa", to: "Nairobi" },
    { id: 4, from: "Kisumu", to: "Nairobi" },
    { id: 5, from: "Nakuru", to: "Eldoret" },
    { id: 6, from: "Eldoret", to: "Kitale" },
];

export const SCHEDULES: Schedule[] = [
    { id: 'sch1', route: ROUTES[0], departureTime: "08:00 AM", arrivalTime: "04:00 PM", price: 2500, seatsAvailable: 15, totalSeats: 45 },
    { id: 'sch2', route: ROUTES[0], departureTime: "10:00 PM", arrivalTime: "06:00 AM", price: 2800, seatsAvailable: 5, totalSeats: 45 },
    { id: 'sch3', route: ROUTES[1], departureTime: "09:00 AM", arrivalTime: "03:00 PM", price: 2200, seatsAvailable: 25, totalSeats: 45 },
    { id: 'sch4', route: ROUTES[1], departureTime: "09:00 PM", arrivalTime: "04:00 AM", price: 2400, seatsAvailable: 10, totalSeats: 45 },
    { id: 'sch5', route: ROUTES[2], departureTime: "08:30 AM", arrivalTime: "04:30 PM", price: 2500, seatsAvailable: 20, totalSeats: 45 },
    { id: 'sch6', route: ROUTES[3], departureTime: "10:30 PM", arrivalTime: "05:30 AM", price: 2400, seatsAvailable: 12, totalSeats: 45 },
];

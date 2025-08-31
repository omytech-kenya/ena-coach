
export interface Route {
  id: number;
  from: string;
  to: string;
}

export interface Schedule {
  id: string;
  route: Route;
  departureTime: string;
  arrivalTime: string;
  price: number;
  seatsAvailable: number;
  totalSeats: number;
}

export interface Seat {
    id: string;
    number: string;
    isBooked: boolean;
}

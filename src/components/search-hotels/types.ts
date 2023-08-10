export interface FilterHotels {
  filteredHotels: FilterHotel[];
  isLoading: boolean;
  error: unknown;
}

export interface FilterHotel {
  fullName: string;
  id: string;
  label: string;
  price: number;
  raiting: number;
  location: {
    lat: number;
    lon: number;
  };
  locationId: number;
  locationName: string;
}

export interface HotelsError {
  errorCode: number;
  message: string;
  status: string;
}

export interface FilterParams {
  location: string;
  checkIn: string;
  dayCount: string;
}

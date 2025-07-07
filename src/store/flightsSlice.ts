import {
	createSlice,
	createSelector,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { type RootState } from "./store";

type Time = {
  startTime: string;
  endTime: string;
};

type Flight = {
  id: number;
  price: number;
  fromto: string;
  time: Time;
  company: string;
  duration: number;
  connectionAmount: number;
};

type FlightState = {
  flights: Flight[];
  filters: {
    companies: string[];
    transits: number[];
  };
  loading: boolean;
  error: string | null;
};

export const fetchFlights = createAsyncThunk<
  Flight[],
  undefined,
  { rejectValue: string }
>("flights/fetchFlights", async function (_, { rejectWithValue }) {
  const res = await fetch("src/flights.json");
  if (!res.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await res.json();
  return data;
});

const initialState: FlightState = {
  flights: [],
  filters: {
    companies: [],
    transits: []
  },
  loading: false,
  error: null,
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    sortTicketsCheap: (state) => {
      state.flights = state.flights.sort((a, b) => a.price - b.price);
    },
    sortTicketsFast: (state) => {
      state.flights = state.flights.sort((a, b) => a.duration - b.duration);
    },
    sortTicketsOptimal: (state) => {
      state.flights = state.flights.sort(
        (a, b) => a.connectionAmount - b.connectionAmount
      );
    },
    toggleCompaniesFilter: (state, action) => {
      const company = action.payload;
      const index = state.filters.companies.indexOf(company);

      if (index > -1) {
        state.filters.companies.splice(index, 1);
      } else {
        state.filters.companies.push(company);
      }
    },
    toggleTransitsFilter: (state, action) => {
      const transfers = action.payload;
      const index = state.filters.transits.indexOf(transfers);

      if (index > -1) {
        state.filters.transits.splice(index, 1);
      } else {
        state.filters.transits.push(transfers);
      }
    },
    setCompaniesFilters: (state, action) => {
      state.filters.companies = action.payload;
    },

    setTransitsFilters: (state, action) => {
      state.filters.transits = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFlights.fulfilled,
        (state, action: PayloadAction<Flight[]>) => {
          state.flights = action.payload;
          state.loading = false;
        }
      );
  },
});

export const {
  sortTicketsCheap,
  sortTicketsFast,
  sortTicketsOptimal,
  toggleCompaniesFilter,
  toggleTransitsFilter,
  setCompaniesFilters,
  setTransitsFilters,
} = flightsSlice.actions;

export const selectFlights = (state:RootState) => state.flights.flights
export const selectFilters = (state:RootState) => state.flights.filters;
export const selectLoading = (state:RootState) => state.flights.loading;
export const selectError = (state: RootState) => state.flights.error;

export const selectFilteredFlights = createSelector(
  [selectFlights, selectFilters],
  (flights, filters) => {
    let filtered = flights;

    if (filters.companies.length > 0) {
      filtered = filtered.filter((flight) =>
        filters.companies.includes(flight.company)
      );
    }

    if (filters.transits.length > 0) {
      filtered = filtered.filter((flight) =>
        filters.transits.includes(flight.connectionAmount)
      );
    }

    const sortedTickets = [...filtered];


    return sortedTickets;
	}
);

export const selectAvailableFilters = createSelector(
  [selectFlights],
  (flights) => ({
    companies: [...new Set(flights.map((flight) => flight.company))],
    transits: [...new Set(flights.map((flight) => flight.connectionAmount))],
  })
);

export default flightsSlice.reducer;

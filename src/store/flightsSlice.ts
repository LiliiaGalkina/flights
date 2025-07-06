import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { companies } from "../components/Main/FilterCompany";
import { countTransits } from "../components/Main/FilterCountTransfers";

type Time = {
	startTime: string;
	endTime: string
}

type Flight = {
  id: number;
  price: number;
  fromto: string;
  time: Time;
  company: string;
  duration: number;
  connectionAmount: number
};

type FlightState = {
	flights: Flight[];
	loading: boolean;
	error: string | null;
}

export const fetchFlights = createAsyncThunk<Flight[], undefined, {rejectValue: string}>(
	"flights/fetchFlights",
	async function(_,{rejectWithValue}) {
		const res = await fetch("src/flights.json");
		if (!res.ok) {
			return rejectWithValue("Server Error!");
		}
		const data = await res.json();
		return data;
		
	}
);

const initialState: FlightState = {
	flights: [],
	loading: false,
	error: null
}



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
      state.flights = state.flights.sort((a, b) => a.connectionAmount - b.connectionAmount);
	  },
	  filterTickets: (state) => {
		  if (companies.length > 0 && countTransits.length === 0) {
			state.flights = state.flights.filter(flight => companies.includes(flight.company))
		  } else if (companies.length === 0 && countTransits.length > 0) {
			  state.flights = state.flights.filter(flight => countTransits.includes(flight.connectionAmount))
		  } else if (companies.length > 0 && countTransits.length > 0) {
			  state.flights =state.flights.filter(flight => companies.includes(flight.company) && countTransits.includes(flight.connectionAmount))
		}
	}
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

export const { sortTicketsCheap, sortTicketsFast, sortTicketsOptimal, filterTickets } = flightsSlice.actions;
export default flightsSlice.reducer;
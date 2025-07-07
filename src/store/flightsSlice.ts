import {
createSlice,
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
} = flightsSlice.actions;


export default flightsSlice.reducer;

import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {},
  extraReducers: (builder) => {
	  builder
		  .addCase(fetchFlights.pending, (state) => {
			  state.loading = true;
			  state.error = null;
		  })
		  .addCase(fetchFlights.fulfilled, (state, action: PayloadAction<Flight[]>) => {
			  state.flights = action.payload;
			  state.loading = false;
	  })
  },
});

export default flightsSlice.reducer;
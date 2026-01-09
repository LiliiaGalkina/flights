import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { IFlight, IFlightState } from "../components/types";

export const fetchFlights = createAsyncThunk<
  IFlight[],
  undefined,
  { rejectValue: string }
>("flights/fetchFlights", async function (_, { rejectWithValue }) {
  const res = await fetch("./flights.json");
  if (!res.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await res.json();
  return data;
});

const initialState: IFlightState = {
  flights: [],
  filtered: [],
  filterByCompany: [],
  filterByTransfersCount: [],
  isLoading: false,
  isError: false,
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    sortTicketsCheap: (state) => {
      state.flights = state.filtered.sort((a, b) => a.price - b.price);
    },
    sortTicketsFast: (state) => {
      state.flights = state.filtered.sort((a, b) => a.duration - b.duration);
    },
    sortTicketsOptimal: (state) => {
      state.flights = state.filtered.sort(
        (a, b) => a.connectionAmount - b.connectionAmount
      );
    },

    setSelectedStops: (state, action) => {
      if (!state.filterByTransfersCount.includes(action.payload)) {
        state.filterByTransfersCount.push(action.payload);
      } else {
        state.filterByTransfersCount = state.filterByTransfersCount.filter(
          (countTransitItem) => countTransitItem !== action.payload
        );
      }
    },
    setSelectedAirlines: (state, action) => {
      if (!state.filterByCompany.includes(action.payload)) {
        state.filterByCompany.push(action.payload);
      } else {
        state.filterByCompany = state.filterByCompany.filter(
          (companyItem) => companyItem !== action.payload
        );
      }
    },
    filterTickets: (state) => {
      if (
        state.filterByCompany.length > 0 &&
        state.filterByTransfersCount.length === 0
      ) {
        state.filtered = state.flights.filter((flight) =>
          state.filterByCompany.includes(flight.company)
        );
      } else if (
        state.filterByCompany.length === 0 &&
        state.filterByTransfersCount.length > 0
      ) {
        state.filtered = state.flights.filter((flight) =>
          state.filterByTransfersCount.includes(flight.connectionAmount)
        );
      } else if (
        state.filterByCompany.length > 0 &&
        state.filterByTransfersCount.length > 0
      ) {
        state.filtered = state.flights.filter(
          (flight) =>
            state.filterByTransfersCount.includes(flight.connectionAmount) &&
            state.filterByCompany.includes(flight.company)
        );
      } else if (
        state.filterByCompany.length === 0 &&
        state.filterByTransfersCount.length === 0
      ) {
        state.filtered = state.flights;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchFlights.fulfilled,
        (state, action: PayloadAction<IFlight[]>) => {
          state.flights = action.payload;
          state.filtered = action.payload;
          state.isLoading = false;
          state.isError = false;
        }
      )
      .addCase(fetchFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {
  sortTicketsCheap,
  sortTicketsFast,
  sortTicketsOptimal,
  filterTickets,
  setSelectedAirlines,
  setSelectedStops,
} = flightsSlice.actions;

export default flightsSlice.reducer;

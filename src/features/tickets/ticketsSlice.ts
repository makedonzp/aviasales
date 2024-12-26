import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchTickets } from './ticketsAPI';
import { RootState } from '../../app/store';

export interface Ticket {
  id: number;
  from: string;
  to: string;
  price: number;
  departure: string;
  arrival: string;
  stops: number;
  company: string;
  companyImg: string;
}

interface TicketsState {
  tickets: Ticket[];
  selectedStops: number[];
  selectedCompanies: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  selectedStops: [],
  selectedCompanies: [],
  status: 'idle',
  error: null,
};

export const fetchTicketsAsync = createAsyncThunk(
  'tickets/fetchTickets',
  async () => {
    const response = await fetchTickets();
    return response;
  }
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setSelectedStops: (state, action: PayloadAction<number[]>) => {
      state.selectedStops = action.payload;
    },
    setSelectedCompanies: (state, action: PayloadAction<string[]>) => {
      state.selectedCompanies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTicketsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tickets = [...state.tickets, ...action.payload];
      })
      .addCase(fetchTicketsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch tickets';
      });
  },
});

export const { setSelectedStops, setSelectedCompanies } = ticketsSlice.actions;

export const selectAllTickets = (state: RootState) => state.tickets.tickets;
export const selectSelectedStops = (state: RootState) => state.tickets.selectedStops;
export const selectSelectedCompanies = (state: RootState) => state.tickets.selectedCompanies;

export default ticketsSlice.reducer;
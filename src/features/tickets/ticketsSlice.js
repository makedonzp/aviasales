var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTickets } from './ticketsAPI';
const initialState = {
    tickets: [],
    selectedStops: [],
    selectedCompanies: [],
    status: 'idle',
    error: null,
};
export const fetchTicketsAsync = createAsyncThunk('tickets/fetchTickets', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetchTickets();
    return response;
}));
const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setSelectedStops: (state, action) => {
            state.selectedStops = action.payload;
        },
        setSelectedCompanies: (state, action) => {
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
export const selectAllTickets = (state) => state.tickets.tickets;
export const selectSelectedStops = (state) => state.tickets.selectedStops;
export const selectSelectedCompanies = (state) => state.tickets.selectedCompanies;
export default ticketsSlice.reducer;

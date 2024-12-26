import { createSlice, createAsyncThunk, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { fetchTickets } from './ticketsAPI';
import { RootState } from '../../app/store';

// Определение интерфейса для билета
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

// Создание адаптера для управления сущностями
const ticketsAdapter = createEntityAdapter<Ticket>({
  selectId: (ticket: Ticket) => ticket.id, // Явно указываем тип
  sortComparer: (a, b) => a.price - b.price,
});

// Определение начального состояния с использованием адаптера
const initialState = ticketsAdapter.getInitialState({
  selectedStops: [] as number[],
  selectedCompanies: [] as string[],
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null as string | null,
});

// Асинхронный Thunk для загрузки билетов
export const fetchTicketsAsync = createAsyncThunk(
  'tickets/fetchTickets',
  async () => {
    const response = await fetchTickets();
    return response;
  }
);

// Создание слайса
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
        ticketsAdapter.addMany(state, action.payload);
      })
      .addCase(fetchTicketsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch tickets';
      });
  },
});

// Экспорт действий и редьюсера
export const { setSelectedStops, setSelectedCompanies } = ticketsSlice.actions;

// Экспорт селекторов адаптера
export const {
  selectAll: selectAllTickets,
  selectById: selectTicketById,
} = ticketsAdapter.getSelectors((state: RootState) => state.tickets);

export default ticketsSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from '../features/tickets/ticketsSlice';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});

// Типы для типизации хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
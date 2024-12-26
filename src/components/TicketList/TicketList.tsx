import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectAllTickets } from '../../features/tickets/ticketsSlice';
import TicketComponent from '../Ticket/Ticket';
import styles from './TicketList.module.css';

interface TicketListProps {
  sortType: 'cheapest' | 'fastest' | 'optimal';
  visibleTickets: number; // Добавляем visibleTickets
}

const TicketList: React.FC<TicketListProps> = ({ sortType, visibleTickets }) => {
  const tickets = useAppSelector(selectAllTickets);

  // Функция для вычисления времени в пути
  const calculateDuration = (departure: string, arrival: string): number => {
    const departureTime = new Date(`1970-01-01T${departure}:00`).getTime();
    const arrivalTime = new Date(`1970-01-01T${arrival}:00`).getTime();
    return arrivalTime - departureTime;
  };

  // Сортировка билетов
  const sortedTickets = [...tickets].sort((a, b) => {
    if (sortType === 'cheapest') {
      return a.price - b.price;
    } else if (sortType === 'fastest') {
      const durationA = calculateDuration(a.departure, a.arrival);
      const durationB = calculateDuration(b.departure, b.arrival);
      return durationA - durationB;
    } else if (sortType === 'optimal') {
      const priceDiff = a.price - b.price;
      if (priceDiff !== 0) return priceDiff;
      const durationA = calculateDuration(a.departure, a.arrival);
      const durationB = calculateDuration(b.departure, b.arrival);
      return durationA - durationB;
    }
    return 0;
  });

  // Отображаем только первые `visibleTickets` билетов
  const visibleTicketsList = sortedTickets.slice(0, visibleTickets);

  return (
    <div className={styles.container}>
      {visibleTicketsList.map((ticket) => (
        <TicketComponent key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
import React from 'react';
import { Ticket } from '../../features/tickets/ticketsSlice';
import styles from './Ticket.module.css';

interface TicketProps {
  ticket: Ticket;
}

const calculateTransferTime = (departure: string, arrival: string): string => {
  // Проверяем, что время имеет формат HH:MM
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (!timeRegex.test(departure) || !timeRegex.test(arrival)) {
    return 'Некорректное время';
  }

  // Преобразуем время в объекты Date
  const departureTime = new Date(`1970-01-01T${departure}:00`);
  const arrivalTime = new Date(`1970-01-01T${arrival}:00`);

  // Вычисляем разницу в миллисекундах
  const diffInMs = arrivalTime.getTime() - departureTime.getTime();

  // Если разница отрицательная, значит прибытие на следующий день
  const correctedDiffInMs = diffInMs < 0 ? diffInMs + 24 * 60 * 60 * 1000 : diffInMs;

  // Преобразуем разницу в минуты
  const diffInMinutes = Math.floor(correctedDiffInMs / (1000 * 60));

  // Преобразуем минуты в часы и минуты
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;

  // Формируем строку
  if (hours === 0) {
    return `${minutes} мин`;
  } else if (minutes === 0) {
    return `${hours} ч`;
  } else {
    return `${hours} ч ${minutes} мин`;
  }
};

const getStopsText = (stops: number): string => {
  if (stops === 0) {
    return 'пересадок';
  } else if (stops === 1) {
    return 'пересадка';
  } else if (stops >= 2 && stops <= 4) {
    return 'пересадки';
  } else {
    return 'пересадок';
  }
};

const TicketComponent: React.FC<TicketProps> = ({ ticket }) => {
  const transferTime = calculateTransferTime(ticket.departure, ticket.arrival);
  const stopsText = getStopsText(ticket.stops);

  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <span className={styles.price}>{ticket.price} P</span>
        <div style={{ backgroundImage: `url(${ticket.companyImg})` }} className={styles.logo} />
      </div>
      <div className={styles.details}>
        <div className={styles.route}>
          <span className={styles.label}>SVO - LED</span>
          <span className={styles.value}>
            {ticket.departure} - {ticket.arrival}
          </span>
        </div>
        <div className={styles.duration}>
          <span className={styles.label}>В пути</span>
          <span className={styles.value}>
            {transferTime}
          </span>
        </div>
        <div className={styles.stops}>
          <span className={styles.label}>Пересадки</span>
          <span className={styles.value}>
            {ticket.stops} {stopsText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
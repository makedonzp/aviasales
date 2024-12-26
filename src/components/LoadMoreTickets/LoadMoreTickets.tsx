import React from 'react';
import styles from './LoadMoreTickets.module.css';

interface LoadMoreTicketsProps {
  onLoadMore: () => void;
}

const LoadMoreTickets: React.FC<LoadMoreTicketsProps> = ({ onLoadMore }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onLoadMore}>
        Загрузить еще билеты
      </button>
    </div>
  );
};

export default LoadMoreTickets;
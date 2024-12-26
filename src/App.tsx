import React, { useEffect, useState } from 'react';
import { useAppDispatch } from './app/hooks';
import { fetchTicketsAsync } from './features/tickets/ticketsSlice';
import Layout from './components/Layout/Layout';
import TicketList from './components/TicketList/TicketList';
import Filter from './components/Filter/Filter';
import CompanyFilter from './components/CompanyFilter/CompanyFilter';
import SortingTabs from './components/SortingTabs/SortingTabs';
import LoadMoreTickets from './components/LoadMoreTickets/LoadMoreTickets';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './App.module.css';
import FilterAll from './components/FilterAll/FilterAll';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [sortType, setSortType] = useState<'cheapest' | 'fastest' | 'optimal'>('cheapest');
  const [visibleTickets, setVisibleTickets] = useState(3); // Состояние для видимых билетов

  useEffect(() => {
    dispatch(fetchTicketsAsync());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleTickets((prev) => prev + 3); // Увеличиваем количество видимых билетов на 3
    dispatch(fetchTicketsAsync()); // Загружаем новые билеты
  };

  return (
    <Layout>
      <Container fluid className={styles.container_fluid}>
        <Container className={styles.filterContainer}>
          <Row className={styles.filterRow}>
            <Col md={3} className={styles.filterCol}>
              <Filter />
              <CompanyFilter />
            </Col>
            <Col>
              <SortingTabs onSort={setSortType} />
              <FilterAll />
              <TicketList sortType={sortType} visibleTickets={visibleTickets} /> {/* Передаем visibleTickets */}
              <LoadMoreTickets onLoadMore={handleLoadMore} /> {/* Передаем handleLoadMore */}
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export default App;
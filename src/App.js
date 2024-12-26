import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
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
const App = () => {
    const dispatch = useAppDispatch();
    const [sortType, setSortType] = useState('cheapest');
    const [visibleTickets, setVisibleTickets] = useState(3); // Состояние для видимых билетов
    useEffect(() => {
        dispatch(fetchTicketsAsync());
    }, [dispatch]);
    const handleLoadMore = () => {
        setVisibleTickets((prev) => prev + 3); // Увеличиваем количество видимых билетов на 3
        dispatch(fetchTicketsAsync()); // Загружаем новые билеты
    };
    return (_jsx(Layout, { children: _jsx(Container, { fluid: true, className: styles.container_fluid, children: _jsx(Container, { className: styles.filterContainer, children: _jsxs(Row, { className: styles.filterRow, children: [_jsxs(Col, { md: 3, className: styles.filterCol, children: [_jsx(Filter, {}), _jsx(CompanyFilter, {})] }), _jsxs(Col, { children: [_jsx(SortingTabs, { onSort: setSortType }), _jsx(FilterAll, {}), _jsx(TicketList, { sortType: sortType, visibleTickets: visibleTickets }), " ", _jsx(LoadMoreTickets, { onLoadMore: handleLoadMore }), " "] })] }) }) }) }));
};
export default App;

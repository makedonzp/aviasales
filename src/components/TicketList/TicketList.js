import { jsx as _jsx } from "react/jsx-runtime";
import { useAppSelector } from '../../app/hooks';
import { selectAllTickets, selectSelectedStops, selectSelectedCompanies } from '../../features/tickets/ticketsSlice';
import TicketComponent from '../Ticket/Ticket';
import styles from './TicketList.module.css';
const TicketList = ({ sortType, visibleTickets }) => {
    const tickets = useAppSelector(selectAllTickets);
    const selectedStops = useAppSelector(selectSelectedStops);
    const selectedCompanies = useAppSelector(selectSelectedCompanies);
    console.log('Tickets:', tickets);
    console.log('Selected Stops:', selectedStops);
    console.log('Selected Companies:', selectedCompanies);
    const calculateDuration = (departure, arrival) => {
        const departureTime = new Date(`1970-01-01T${departure}:00`).getTime();
        const arrivalTime = new Date(`1970-01-01T${arrival}:00`).getTime();
        return arrivalTime - departureTime;
    };
    const filteredTickets = tickets.filter((ticket) => {
        const matchesStops = selectedStops.length === 0 || selectedStops.includes(ticket.stops);
        const matchesCompanies = selectedCompanies.length === 0 || selectedCompanies.includes(ticket.company);
        return matchesStops && matchesCompanies;
    });
    console.log('Filtered Tickets:', filteredTickets);
    const sortedTickets = [...filteredTickets].sort((a, b) => {
        if (sortType === 'cheapest') {
            return a.price - b.price;
        }
        else if (sortType === 'fastest') {
            const durationA = calculateDuration(a.departure, a.arrival);
            const durationB = calculateDuration(b.departure, b.arrival);
            return durationA - durationB;
        }
        else if (sortType === 'optimal') {
            const priceDiff = a.price - b.price;
            if (priceDiff !== 0)
                return priceDiff;
            const durationA = calculateDuration(a.departure, a.arrival);
            const durationB = calculateDuration(b.departure, b.arrival);
            return durationA - durationB;
        }
        return 0;
    });
    console.log('Sorted Tickets:', sortedTickets);
    const visibleTicketsList = sortedTickets.slice(0, visibleTickets);
    return (_jsx("div", { className: styles.container, children: visibleTicketsList.map((ticket) => (_jsx(TicketComponent, { ticket: ticket }, ticket.id))) }));
};
export default TicketList;

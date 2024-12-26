import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import styles from './Ticket.module.css';
const calculateTransferTime = (departure, arrival) => {
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
    }
    else if (minutes === 0) {
        return `${hours} ч`;
    }
    else {
        return `${hours} ч ${minutes} мин`;
    }
};
const getStopsText = (stops) => {
    if (stops === 0) {
        return 'пересадок';
    }
    else if (stops === 1) {
        return 'пересадка';
    }
    else if (stops >= 2 && stops <= 4) {
        return 'пересадки';
    }
    else {
        return 'пересадок';
    }
};
const TicketComponent = ({ ticket }) => {
    const transferTime = calculateTransferTime(ticket.departure, ticket.arrival);
    const stopsText = getStopsText(ticket.stops);
    return (_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.header, children: [_jsxs("span", { className: styles.price, children: [ticket.price, " P"] }), _jsx("div", { style: { backgroundImage: `url(${ticket.companyImg})` }, className: styles.logo })] }), _jsxs("div", { className: styles.details, children: [_jsxs("div", { className: styles.route, children: [_jsx("span", { className: styles.label, children: "SVO - LED" }), _jsxs("span", { className: styles.value, children: [ticket.departure, " - ", ticket.arrival] })] }), _jsxs("div", { className: styles.duration, children: [_jsx("span", { className: styles.label, children: "\u0412 \u043F\u0443\u0442\u0438" }), _jsx("span", { className: styles.value, children: transferTime })] }), _jsxs("div", { className: styles.stops, children: [_jsx("span", { className: styles.label, children: "\u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0438" }), _jsxs("span", { className: styles.value, children: [ticket.stops, " ", stopsText] })] })] })] }));
};
export default TicketComponent;

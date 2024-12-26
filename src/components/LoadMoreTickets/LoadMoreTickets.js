import { jsx as _jsx } from "react/jsx-runtime";
import styles from './LoadMoreTickets.module.css';
const LoadMoreTickets = ({ onLoadMore }) => {
    return (_jsx("div", { className: styles.container, children: _jsx("button", { className: styles.button, onClick: onLoadMore, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435 \u0431\u0438\u043B\u0435\u0442\u044B" }) }));
};
export default LoadMoreTickets;

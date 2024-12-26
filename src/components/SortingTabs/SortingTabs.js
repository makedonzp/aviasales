import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './SortingTabs.module.css';
const SortingTabs = ({ onSort }) => {
    const [activeTab, setActiveTab] = useState('cheapest');
    const handleTabClick = (sortType) => {
        setActiveTab(sortType);
        onSort(sortType);
        console.log('Sort type selected:', sortType);
    };
    return (_jsxs("div", { className: styles.container, children: [_jsx("button", { className: `${styles.tab} ${activeTab === 'cheapest' ? styles.active : ''}`, onClick: () => handleTabClick('cheapest'), children: "\u0421\u0430\u043C\u044B\u0439 \u0434\u0435\u0448\u0435\u0432\u044B\u0439" }), _jsx("button", { className: `${styles.tab} ${activeTab === 'fastest' ? styles.active : ''}`, onClick: () => handleTabClick('fastest'), children: "\u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439" }), _jsx("button", { className: `${styles.tab} ${activeTab === 'optimal' ? styles.active : ''}`, onClick: () => handleTabClick('optimal'), children: "\u0421\u0430\u043C\u044B\u0439 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439" })] }));
};
export default SortingTabs;

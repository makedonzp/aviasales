import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSelectedCompanies, setSelectedStops } from '../../features/tickets/ticketsSlice';
import styles from './FilterAll.module.css';
const companies = ['Победа', 'Red Wings', 'S7 Airlines']; // Список компаний
const FilterAll = () => {
    const dispatch = useAppDispatch();
    const selectedCompanies = useAppSelector((state) => state.tickets.selectedCompanies);
    const selectedStops = useAppSelector((state) => state.tickets.selectedStops);
    const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия области фильтров
    const handleCompanyChange = (company) => {
        const newSelectedCompanies = selectedCompanies.includes(company)
            ? selectedCompanies.filter((c) => c !== company)
            : [...selectedCompanies, company];
        dispatch(setSelectedCompanies(newSelectedCompanies));
    };
    const handleStopsChange = (stops) => {
        const newSelectedStops = selectedStops.includes(stops)
            ? selectedStops.filter((stop) => stop !== stops)
            : [...selectedStops, stops];
        dispatch(setSelectedStops(newSelectedStops));
    };
    // Функция для формирования текста
    const getFilterText = (selectedCompanies, selectedStops) => {
        let companyText = 'Любая авиакомпания';
        let stopsText = 'любое кол-во пересадок';
        if (selectedCompanies.length > 0) {
            companyText = selectedCompanies.join(', ');
        }
        if (selectedStops.length > 0) {
            stopsText = selectedStops
                .map((stop) => (stop === 0 ? 'Без пересадок' : `${stop} пересадки`))
                .join(', ');
        }
        return `${companyText}, ${stopsText}`;
    };
    return (_jsxs("div", { className: styles.filterAll, children: [_jsxs("div", { className: styles.header, onClick: () => setIsOpen(!isOpen), children: [_jsx("span", { className: styles.headerText, children: getFilterText(selectedCompanies, selectedStops) }), _jsxs("span", { className: styles.headerAction, children: ["\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438", _jsx("span", { className: `${styles.arrow} ${isOpen ? styles.arrowUp : styles.arrowDown}` })] })] }), isOpen && (_jsxs("div", { className: styles.content, children: [_jsxs("div", { className: styles.section, children: [_jsx("h3", { className: styles.title, children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438" }), _jsx("div", { className: styles.checkbox, children: companies.map((company) => (_jsxs("label", { className: styles.label, children: [_jsx("input", { type: "checkbox", checked: selectedCompanies.includes(company), onChange: () => handleCompanyChange(company), className: styles.checkboxInput }), _jsx("span", { className: styles.checkboxCustom }), _jsx("span", { className: styles.text, children: company })] }, company))) })] }), _jsxs("div", { className: styles.section, children: [_jsx("h3", { className: styles.title, children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A" }), _jsx("div", { className: styles.checkbox, children: [0, 1, 2, 3].map((stops) => (_jsxs("label", { className: styles.label, children: [_jsx("input", { type: "checkbox", checked: selectedStops.includes(stops), onChange: () => handleStopsChange(stops), className: styles.checkboxInput }), _jsx("span", { className: styles.checkboxCustom }), _jsx("span", { className: styles.text, children: stops === 0 ? 'Без пересадок' : `${stops} пересадки` })] }, stops))) })] })] }))] }));
};
export default FilterAll;

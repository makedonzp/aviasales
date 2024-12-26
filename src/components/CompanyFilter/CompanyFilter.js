import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSelectedCompanies } from '../../features/tickets/ticketsSlice';
import styles from './CompanyFilter.module.css';
const companies = ['Победа', 'Red Wings', 'S7 Airlines']; // Список компаний
const CompanyFilter = () => {
    const dispatch = useAppDispatch();
    const selectedCompanies = useAppSelector((state) => state.tickets.selectedCompanies);
    const handleCheckboxChange = (company) => {
        const newSelectedCompanies = selectedCompanies.includes(company)
            ? selectedCompanies.filter((c) => c !== company)
            : [...selectedCompanies, company];
        dispatch(setSelectedCompanies(newSelectedCompanies));
    };
    return (_jsxs("div", { className: styles.container, children: [_jsx("h3", { className: styles.title, children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438" }), _jsx("div", { className: styles.checkbox, children: companies.map((company) => (_jsxs("label", { className: styles.label, children: [_jsx("input", { type: "checkbox", checked: selectedCompanies.includes(company), onChange: () => handleCheckboxChange(company), className: styles.checkboxInput }), _jsx("span", { className: styles.checkboxCustom }), _jsx("span", { className: styles.text, children: company })] }, company))) })] }));
};
export default CompanyFilter;

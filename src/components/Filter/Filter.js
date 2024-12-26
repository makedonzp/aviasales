import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSelectedStops } from '../../features/tickets/ticketsSlice';
import './Filter.css';
const Filter = () => {
    const dispatch = useAppDispatch();
    const selectedStops = useAppSelector((state) => state.tickets.selectedStops);
    const handleCheckboxChange = (stops) => {
        const newSelectedStops = selectedStops.includes(stops)
            ? selectedStops.filter((stop) => stop !== stops)
            : [...selectedStops, stops];
        dispatch(setSelectedStops(newSelectedStops));
    };
    return (_jsxs("div", { className: "filter-container", children: [_jsx("h3", { className: "filter-title", children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A" }), _jsxs("div", { className: "filter-checkbox", children: [_jsxs("label", { children: [_jsx("input", { className: "filter-checkbox-input", type: "checkbox", checked: selectedStops.includes(0), onChange: () => handleCheckboxChange(0) }), _jsx("span", {}), " ", "\u0411\u0435\u0437 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A"] }), _jsxs("label", { children: [_jsx("input", { className: "filter-checkbox-input", type: "checkbox", checked: selectedStops.includes(1), onChange: () => handleCheckboxChange(1) }), _jsx("span", {}), " ", "1 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430"] }), _jsxs("label", { children: [_jsx("input", { className: "filter-checkbox-input", type: "checkbox", checked: selectedStops.includes(2), onChange: () => handleCheckboxChange(2) }), _jsx("span", {}), " ", "2 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0438"] }), _jsxs("label", { children: [_jsx("input", { className: "filter-checkbox-input", type: "checkbox", checked: selectedStops.includes(3), onChange: () => handleCheckboxChange(3) }), _jsx("span", {}), " ", "3 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0438"] })] })] }));
};
export default Filter;

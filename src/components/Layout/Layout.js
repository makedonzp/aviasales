import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../Header/Header';
import styles from './Layout.module.css';
const Layout = ({ children }) => {
    return (_jsxs("div", { className: styles.layout, children: [_jsx(Header, {}), _jsx("main", { children: children })] }));
};
export default Layout; // Используйте export default

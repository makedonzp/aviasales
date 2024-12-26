import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Header.module.css';
import logo from "../../assets/logo.svg";
const Header = () => {
    return (_jsx(Container, { fluid: true, className: styles.header, children: _jsx(Container, { className: styles.headerContainer, children: _jsx(Row, { className: styles.headerRow, children: _jsxs(Col, { className: styles.headerCol, children: [_jsx("img", { src: logo, alt: "Aviasales Logo", className: styles.headerLogo }), _jsx("h1", { className: styles.headerTitle, children: "\u041F\u043E\u0438\u0441\u043A \u0430\u0432\u0438\u0430\u0431\u0438\u043B\u0435\u0442\u043E\u0432" })] }) }) }) }));
};
export default Header;

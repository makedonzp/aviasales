import { Col, Container, Row } from 'react-bootstrap';
import styles from './Header.module.css';
import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container fluid className={styles.header}>
        <Container className={styles.headerContainer}>
            <Row className={styles.headerRow}>
                <Col className={styles.headerCol}>
                    <img src={logo} alt="Aviasales Logo" className={styles.headerLogo} />
                    <h1 className={styles.headerTitle}>Поиск авиабилетов</h1>
                </Col>
            </Row>
        </Container>
    </Container>
  );
};

export default Header;
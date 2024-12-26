import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>      
    </div>
  );
};

export default Layout; // Используйте export default
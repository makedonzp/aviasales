import React, { useState } from 'react';
import styles from './SortingTabs.module.css';

interface SortingTabsProps {
  onSort: (sortType: 'cheapest' | 'fastest' | 'optimal') => void;
}

const SortingTabs: React.FC<SortingTabsProps> = ({ onSort }) => {
  const [activeTab, setActiveTab] = useState<'cheapest' | 'fastest' | 'optimal'>('cheapest');

  const handleTabClick = (sortType: 'cheapest' | 'fastest' | 'optimal') => {
    setActiveTab(sortType);
    onSort(sortType);
    console.log('Sort type selected:', sortType);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.tab} ${activeTab === 'cheapest' ? styles.active : ''}`}
        onClick={() => handleTabClick('cheapest')}
      >
        Самый дешевый
      </button>
      <button
        className={`${styles.tab} ${activeTab === 'fastest' ? styles.active : ''}`}
        onClick={() => handleTabClick('fastest')}
      >
        Самый быстрый
      </button>
      <button
        className={`${styles.tab} ${activeTab === 'optimal' ? styles.active : ''}`}
        onClick={() => handleTabClick('optimal')}
      >
        Самый оптимальный
      </button>
    </div>
  );
};

export default SortingTabs;
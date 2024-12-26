import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSelectedCompanies } from '../../features/tickets/ticketsSlice';
import styles from './CompanyFilter.module.css';

const companies = ['Победа', 'Red Wings', 'S7 Airlines']; // Список компаний

const CompanyFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedCompanies = useAppSelector((state) => state.tickets.selectedCompanies);

  const handleCheckboxChange = (company: string) => {
    const newSelectedCompanies = selectedCompanies.includes(company)
      ? selectedCompanies.filter((c) => c !== company)
      : [...selectedCompanies, company];
    dispatch(setSelectedCompanies(newSelectedCompanies));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Компании</h3>
      <div className={styles.checkbox}>
        {companies.map((company) => (
          <label key={company} className={styles.label}>
            <input
              type="checkbox"
              checked={selectedCompanies.includes(company)}
              onChange={() => handleCheckboxChange(company)}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxCustom}></span>
            <span className={styles.text}>{company}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CompanyFilter;
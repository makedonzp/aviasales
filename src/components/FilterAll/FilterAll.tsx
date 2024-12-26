import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSelectedCompanies, setSelectedStops } from '../../features/tickets/ticketsSlice';
import styles from './FilterAll.module.css';

const companies = ['Победа', 'Red Wings', 'S7 Airlines']; // Список компаний

const FilterAll: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedCompanies = useAppSelector((state) => state.tickets.selectedCompanies);
  const selectedStops = useAppSelector((state) => state.tickets.selectedStops);
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия области фильтров

  const handleCompanyChange = (company: string) => {
    const newSelectedCompanies = selectedCompanies.includes(company)
      ? selectedCompanies.filter((c) => c !== company)
      : [...selectedCompanies, company];
    dispatch(setSelectedCompanies(newSelectedCompanies));
  };

  const handleStopsChange = (stops: number) => {
    const newSelectedStops = selectedStops.includes(stops)
      ? selectedStops.filter((stop) => stop !== stops)
      : [...selectedStops, stops];
    dispatch(setSelectedStops(newSelectedStops));
  };

  // Функция для формирования текста
  const getFilterText = (selectedCompanies: string[], selectedStops: number[]): string => {
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

  return (
    <div className={styles.filterAll}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.headerText}>
          {getFilterText(selectedCompanies, selectedStops)}
        </span>
        <span className={styles.headerAction}>
          Открыть настройки
          <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`}></span>
        </span>
      </div>
      {isOpen && (
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Компании</h3>
            <div className={styles.checkbox}>
              {companies.map((company) => (
                <label key={company} className={styles.label}>
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(company)}
                    onChange={() => handleCompanyChange(company)}
                    className={styles.checkboxInput}
                  />
                  <span className={styles.checkboxCustom}></span>
                  <span className={styles.text}>{company}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.title}>Количество пересадок</h3>
            <div className={styles.checkbox}>
              {[0, 1, 2, 3].map((stops) => (
                <label key={stops} className={styles.label}>
                  <input
                    type="checkbox"
                    checked={selectedStops.includes(stops)}
                    onChange={() => handleStopsChange(stops)}
                    className={styles.checkboxInput}
                  />
                  <span className={styles.checkboxCustom}></span>
                  <span className={styles.text}>
                    {stops === 0 ? 'Без пересадок' : `${stops} пересадки`}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterAll;
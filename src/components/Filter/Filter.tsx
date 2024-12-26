import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSelectedStops } from '../../features/tickets/ticketsSlice';
import './Filter.css';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedStops = useAppSelector((state) => state.tickets.selectedStops);

  const handleCheckboxChange = (stops: number) => {
    const newSelectedStops = selectedStops.includes(stops)
      ? selectedStops.filter((stop) => stop !== stops)
      : [...selectedStops, stops];
    dispatch(setSelectedStops(newSelectedStops));
  };

  return (
    <div className="filter-container">
      <h3 className="filter-title">Количество пересадок</h3>
      <div className="filter-checkbox">
        <label>
          <input
            className="filter-checkbox-input"
            type="checkbox"
            checked={selectedStops.includes(0)}
            onChange={() => handleCheckboxChange(0)}
          />
          <span></span> {/* Кастомный чекбокс */}
          Без пересадок
        </label>
        <label>
          <input
            className="filter-checkbox-input"
            type="checkbox"
            checked={selectedStops.includes(1)}
            onChange={() => handleCheckboxChange(1)}
          />
          <span></span> {/* Кастомный чекбокс */}
          1 пересадка
        </label>
        <label>
          <input
            className="filter-checkbox-input"
            type="checkbox"
            checked={selectedStops.includes(2)}
            onChange={() => handleCheckboxChange(2)}
          />
          <span></span> {/* Кастомный чекбокс */}
          2 пересадки
        </label>
        <label>
          <input
            className="filter-checkbox-input"
            type="checkbox"
            checked={selectedStops.includes(3)}
            onChange={() => handleCheckboxChange(3)}
          />
          <span></span> {/* Кастомный чекбокс */}
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export default Filter;
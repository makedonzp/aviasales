import { Ticket } from './ticketsSlice';
import pobedaLogo from '../../assets/pobedaLogo.svg';
import redWingsLogo from '../../assets/redWingsLogo.svg';
import s7Logo from '../../assets/s7AirlinesLogo.svg';

const cities = ['Moscow', 'Saint Petersburg', 'Sochi', 'Vladivostok', 'Kazan', 'Novosibirsk'];
const companies = [
  { name: 'Победа', logo: pobedaLogo },
  { name: 'Red Wings', logo: redWingsLogo },
  { name: 'S7 Airlines', logo: s7Logo },
];

const getRandomElement = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateRandomTicket = (): Ticket => {
  const from = getRandomElement(cities);
  const to = getRandomElement(cities.filter((city) => city !== from));
  const company = getRandomElement(companies);

  // Генерация времени в формате HH:MM
  const departureHours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
  const departureMinutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
  const departure = `${departureHours}:${departureMinutes}`;

  const arrivalHours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
  const arrivalMinutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
  const arrival = `${arrivalHours}:${arrivalMinutes}`;

  return {
    id: Math.random(),
    from,
    to,
    price: 3000 + Math.floor(Math.random() * 15000), // Случайная цена от 3000 до 18000
    departure,
    arrival,
    stops: Math.floor(Math.random() * 4), // Случайное количество пересадок (от 0 до 3)
    company: company.name,
    companyImg: company.logo,
  };
};

export const fetchTickets = async (): Promise<Ticket[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTickets = Array.from({ length: 3 }, generateRandomTicket); // Генерируем 3 случайных билета
      resolve(newTickets);
    }, 1000);
  });
};
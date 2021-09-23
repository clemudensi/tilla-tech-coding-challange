import { ChangeEventHandler, useEffect, useState, VFC } from "react";
import Link from 'next/link';
import useApiData from "../../hooks/use-api-data";
import Airport from "../../types/airport";
import { SearchFlights } from "../../components/search-flights";
import { useDebounced } from "../../hooks/use-debounced";
import { searchFilter } from "../../utils/search-filter";
import { NoFlights } from "./no-flight";

const FlightList: VFC = () => {
  const airports = useApiData<Airport[]>('/api/airports', []);
  const [inputValue, setInputValue] = useState('');
  const [ filteredFlights, setFilteredFlights] = useState<Airport[]>([])

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const cancelSearch = () => {
    setInputValue('');
  };

  const inputDebounced = useDebounced(inputValue, 400);

  useEffect(() => {
    if (!inputDebounced) {
      setFilteredFlights(airports);
    } else {
      setFilteredFlights(searchFilter(airports, inputValue, ['name', 'iata', 'city', 'country']));
    }
  }, [inputDebounced, airports]);

  return (
    <>
    <SearchFlights
      cancelSearch={cancelSearch}
      inputValue={inputValue}
      onSearchChange={onSearchChange}
    />
      <div>
        { !inputValue.length && filteredFlights.length ? <h2 className="mt-10 text-xl font-semibold">All Airports</h2> : null}
        {filteredFlights.length ? filteredFlights.map(airport => (
          <Link href={`/airports/${airport.iata.toLowerCase()}`} key={airport.iata}>
            <a className='flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none'>
              <span>
                {airport.name}, {airport.city}
              </span>
              <span className='ml-auto text-gray-500'>
                {airport.country}
              </span>
            </a>
          </Link>
        )) : <NoFlights/>}
      </div>
    </>
  )
};

export { FlightList };

import { VFC } from 'react';

interface SearchFlightProps {
  cancelSearch: () => void;
  inputValue: string;
  onSearchChange: (arg) => void;
};

const SearchFlights: VFC<SearchFlightProps> = ({ onSearchChange, cancelSearch, inputValue }) => (
  <div className="rounded-lg overflow-hidden py-3">
    <div className="md:flex">
        <div className="w-full">
          <div className="relative">
            <input
              type="text"
              className="border-2 bg-white h-14 w-full px-12 rounded-lg focus:text-blue-500 hover:cursor-pointer"
              name=""
              onChange={onSearchChange}
              value={inputValue}
            />
            {
              inputValue.length ?
              <span className="absolute top-4 right-5 border-l pl-4">
                <button
                  className="text-gray-500 hover:text-blue-500 hover:cursor-pointer"
                  onClick={cancelSearch}
                >
                  X
                </button>
              </span> : null
            }
          </div>
        </div>
    </div>
  </div>
)

export { SearchFlights };

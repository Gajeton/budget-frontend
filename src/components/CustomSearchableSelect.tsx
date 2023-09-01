import React, { ChangeEvent, useState } from 'react';

interface CustomSearchableSelectProps {
  options: any[];
  placeholder: string;
  selectedValue: any; // Value that corresponds to the selected option
  onSelect: (selectedValue: any) => void; // Callback to handle selection
  name: string;
}

const CustomSearchableSelect = ({
  options,
  placeholder,
  selectedValue,
  onSelect,
  name,
}: CustomSearchableSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionSelect = (option: any) => {
    onSelect(option);
    setSearchTerm('');
    setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="z-10">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md flex items-center justify-between"
      >
        {selectedValue ? (
          <span>{selectedValue.title || null}</span>
        ) : (
          <span className="text-gray-500">{placeholder}</span>
        )}
        <span className="ml-2">&#9660;</span>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange} // Fix the event handler here
            className="px-4 py-2 w-full border-b border-gray-300 focus:outline-none"
          />
          <ul>
            {filteredOptions.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionSelect(option)} // Fix the event handler here
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSearchableSelect;
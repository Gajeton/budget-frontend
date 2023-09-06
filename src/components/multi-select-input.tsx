import React, { ChangeEvent, useState } from 'react';

interface CustomMultiSelectProps {
  options: any[]; // An array of available options
  selectedValues: any[]; // An array of selected options
  onSelect: (selectedValues: any[]) => void; // Callback to handle selection
  placeholder: string;
  name: string;
}

export const MultiSelectInput = ({
  options,
  selectedValues,
  onSelect,
  placeholder,
  name,
}: CustomMultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionSelect = (option: any) => {
    const updatedSelectedValues = [...selectedValues];
    const optionIndex = updatedSelectedValues.findIndex(
      (selectedOption) => selectedOption.id === option.id
    );

    if (optionIndex !== -1) {
      // If the option is already selected, remove it
      updatedSelectedValues.splice(optionIndex, 1);
    } else {
      // If the option is not selected, add it to the selected values
      updatedSelectedValues.push(option);
    }

    onSelect(updatedSelectedValues);
    setSearchTerm('');
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
        {selectedValues.length > 0 ? (
          <div className="flex flex-wrap">
            {selectedValues.map((selectedOption) => (
              <span
                key={selectedOption.id}
                className="bg-blue-200 text-blue-700 px-2 py-1 m-1 rounded-md"
              >
                {selectedOption.title}
              </span>
            ))}
          </div>
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
            onChange={handleSearchChange}
            className="px-4 py-2 w-full border-b border-gray-300 focus:outline-none"
          />
          <ul>
            {filteredOptions.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                className={`px-4 py-2 cursor-pointer ${
                  selectedValues.some((selectedOption) => selectedOption.id === option.id)
                    ? 'bg-blue-200 text-blue-700'
                    : 'hover:bg-gray-100'
                }`}
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
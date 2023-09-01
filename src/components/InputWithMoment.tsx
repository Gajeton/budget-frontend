import React, { useState } from 'react';
import moment, { Moment } from 'moment';

interface InputWithMomentProps {
  onDateChange: (date: Moment | null) => void; // Accept a Date or null
}

function InputWithMoment({ onDateChange }: InputWithMomentProps) {
  const [inputDate, setInputDate] = useState<string>(''); // State to store the user input

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputDate(userInput);

    // Parse the date using Moment.js
    const parsedDate = moment(userInput); // Use strict parsing
    const isValid = parsedDate.isValid();

    // If the parsed date is valid, update the parent component with a Date object
    // If not, update with null to indicate an invalid date
    onDateChange(isValid ? parsedDate : null);
  };

  return (
    <div>
      <label htmlFor="userInput">Enter a date (YYYY-MM-DD):</label>
      <input
        type="date"
        id="userInput"
        name="userInput"
        value={inputDate}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputWithMoment;

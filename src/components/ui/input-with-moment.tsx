import React, { useState } from 'react';
import moment, { Moment } from 'moment';

interface InputWithMomentProps {
  onDateChange: (date: Moment | null) => void;
}

export const InputWithMoment = ({ onDateChange }: InputWithMomentProps) => {

  const [inputDate, setInputDate] = useState<string>(''); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputDate(userInput);
    const parsedDate = moment(userInput); 
    const isValid = parsedDate.isValid();
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



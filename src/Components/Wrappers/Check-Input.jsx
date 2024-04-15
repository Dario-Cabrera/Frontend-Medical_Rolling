import React, { useState } from 'react';

export const ContactCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <input type="checkbox" id="checkbox-hijos" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
  );
};

export const ContactInput = ({ disabled }) => {
  return (
    <input type="number" id="hijos-input" 
            className={`w-1/3 bg-white border-green-400 border-2 solid text-black px-4 py-2 my-2 rounded-md ${disabled ? 'disabled opacity-50 cursor-not-allowed' : ''}`} placeholder="Hijos"/>
  );
};

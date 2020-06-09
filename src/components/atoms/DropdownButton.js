import React from 'react';
import '../../styles/pages.scss';
import './dropdownButton.scss';

const DropdownButton = ({ options, placeholder, handleSelect }) => {
  const generateSelectOptions = () => {
    return (
      options.length &&
      options.map((option, index) => {
        return (
          <option key={`${placeholder}_${index}`} className="dropdownOption" value={option.toLowerCase()}>
            {option}
          </option>
        );
      })
    );
  };
  return (
    <select className="movies__btn" id="title" name={placeholder} onChange={handleSelect} >
      <option className="dropdownOption" value="">
        {placeholder}
      </option>
      {generateSelectOptions()}
    </select >
  );
};

export default DropdownButton;

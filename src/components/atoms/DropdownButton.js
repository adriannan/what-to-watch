import React from 'react';
import '../../styles/pages.scss';
import './dropdownButton.scss';

const DropdownButton = ({ options, placeholder }) => {
  const generateSelectOptions = () => {
    return (
      options.length &&
      options.map((option, index) => {
        return (
          <option className="dropdownOption" value={option.toLowerCase()}>
            {option}
          </option>
        );
      })
    );
  };
  return (
    <select className="movies__btn" id="title" name="genres">
      <option className="dropdownOption" value="">
        {placeholder}
      </option>
      {generateSelectOptions()}
    </select>
  );
};

export default DropdownButton;

import React, { useState } from "react";
import style from "./HeaderLangComp.module.css";
import { IoIosArrowDown } from "react-icons/io";

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`${style.customSelect} ${isOpen ? style.open : ""}`}>
      <div className={style.selectedOption} onClick={toggleDropdown}>
        {selectedOption.label}
        <IoIosArrowDown
          className={`${style.arrow} ${isOpen ? `${style.open}` : ""}`}
        />
      </div>
      {
        <ul className={style.options}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default CustomSelect;

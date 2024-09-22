import React, { useState, useRef, useEffect } from "react";

interface DropdownItem {
  id: string | number;
  label: string;
}

interface DropdownProps {
  items: DropdownItem[];
  onItemSelect: (item: DropdownItem) => void;
  buttonText?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  onItemSelect,
  buttonText,
}) => {
  const handleItemClick = (item: DropdownItem) => {
    onItemSelect(item);
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {buttonText}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[10] w-52 p-2 shadow"
      >
        {items.map((item) => (
          <li key={item.id}>
            <a onClick={() => handleItemClick(item)}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

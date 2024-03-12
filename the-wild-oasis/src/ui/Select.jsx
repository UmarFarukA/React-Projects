import React from "react";

function Select({ options, onChange, sortBy, styles }) {
  return (
    <select value={sortBy} onChange={onChange} className={styles}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;

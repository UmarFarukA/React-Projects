function SelectField({ children, currencyType, onChange }) {
  return (
    <select value={currencyType} onChange={onChange}>
      {children}
    </select>
  );
}

export default SelectField;

function InputFields({ labelCaption, fieldType = "text", value, onChange }) {
  return (
    <div className="form-fields">
      <label>{labelCaption}</label>
      <input type={fieldType} value={value} onChange={onChange} />
    </div>
  );
}

export default InputFields;

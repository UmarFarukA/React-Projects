function Button({ children, onClick, type, status }) {
  return (
    <button onClick={onClick} className={`btn ${type}`} disabled={status}>
      {children}
    </button>
  );
}

export default Button;

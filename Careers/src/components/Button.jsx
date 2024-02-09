import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Button({ children, type, to }) {
  const base = "rounded px-4 py-2 text-stone-100 transition-all";
  const styles = {
    primary: base + " bg-purple-700 hover:bg-purple-600",
    secondary: base + " border border-purple-400 text-purple-700",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return <button className={styles[type]}>{children}</button>;
}

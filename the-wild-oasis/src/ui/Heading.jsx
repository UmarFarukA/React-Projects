import React from "react";

export default function Heading({ children, type }) {
  const base = "text-stone-700";

  const styles = {
    h1: base + " text-4xl",
    h2: base + " text-2xl",
    h3: base + " text-xl",
  };

  return <div className={styles[type]}>{children}</div>;
}

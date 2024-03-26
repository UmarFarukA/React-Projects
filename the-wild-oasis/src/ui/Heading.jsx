import React from "react";

export default function Heading({ children, type }) {
  const base = "text-stone-700";

  const styles = {
    h1: base + " text-4xl",
    h2: base + " text-2xl",
    h3: base + " text-xl",
    h4: base + " text-2xl text-center font-bold mt-2",
  };

  return <div className={styles[type]}>{children}</div>;
}

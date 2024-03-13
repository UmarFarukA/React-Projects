function BookingTable({ children }) {
  return (
    <table className="w-full border-collapse ">
      <thead>
        <tr>
          <th className="text-stone-600 text-lg">Cabin</th>
          <th className="text-stone-600 text-lg">Guest</th>
          <th className="text-stone-600 text-lg">Dates</th>
          <th className="text-stone-600 text-lg">Status</th>
          <th className="text-stone-600 text-lg">Amount</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default BookingTable;

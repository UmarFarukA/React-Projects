import Pagination from "../../ui/Pagination";

function BookingTable({ children, count }) {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th className="text-stone-600 text-lg px-6 py-3">Cabin</th>
            <th className="text-stone-600 text-lg px-6 py-3">Guest</th>
            <th className="text-stone-600 text-lg px-6 py-3">Dates</th>
            <th className="text-stone-600 text-lg px-6 py-3">Status</th>
            <th className="text-stone-600 text-lg px-6 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
        <tfoot></tfoot>
      </table>
      <Pagination count={count} />
    </>
  );
}

export default BookingTable;

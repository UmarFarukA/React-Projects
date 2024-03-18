function BookingRow({ bookings }) {
  // console.log(cabinName);
  return (
    <>
      {bookings.map((booking) => (
        <tr className="text-stone-700" key={booking.id}>
          <td className="px-6 py-4">{booking.cabins.name}</td>
          <td className="px-6 py-4">
            {booking.guests.fullName} <br />
            <span className="text-stone-500 text-sm">
              {booking.guests.email}{" "}
            </span>
          </td>
          <td className="px-6 py-4">{booking.endDate}</td>
          <td className="px-6 py-4">
            {booking.status === "unconfirmed" ? (
              <span className="bg-blue-100 px-3 py-1 text-blue-500 uppercase font-semibold rounded-full">
                unconfirmed
              </span>
            ) : booking.status === "checked-in" ? (
              <span className="bg-green-100 px-3 py-1 text-green-500 uppercase font-semibold rounded-full">
                checked-in
              </span>
            ) : (
              <span className="bg-yellow-100 px-3 py-1 text-yellow-500 uppercase font-semibold rounded-full">
                checked-out
              </span>
            )}
          </td>
          <td className="px-6 py-4">{booking.totalPrice}</td>
        </tr>
      ))}
    </>
  );
}

export default BookingRow;

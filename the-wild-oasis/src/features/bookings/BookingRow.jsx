function BookingRow({ bookings }) {
  // console.log(cabinName);
  return (
    <>
      {bookings.map((booking) => (
        <tr className="text-center py-2 space-y-3 " key={booking.id}>
          <td>{booking.cabins.name}</td>
          <td>{booking.guests}</td>
          <td>{booking.endDate}</td>
          <td>{booking.status}</td>
          <td>{booking.totalPrice}</td>
        </tr>
      ))}
    </>
  );
}

export default BookingRow;

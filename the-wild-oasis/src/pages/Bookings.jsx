import BookingTable from "../features/bookings/BookingTable";
import BookingRow from "../features/bookings/BookingRow";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import useBookings from "../features/bookings/useBookings";
import Spinner from "../ui/Spinner";

function Bookings() {
  const { isLoading, error, bookings } = useBookings();
  console.log(bookings);

  if (isLoading) return <Spinner />;

  if (error) console.log("Error");
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <Heading type="h1">All bookings</Heading>
        <BookingTableOperations />
      </div>

      <BookingTable>
        <BookingRow bookings={bookings} />
      </BookingTable>
    </>
  );
}

export default Bookings;

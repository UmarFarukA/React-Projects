import { useQuery } from "@tanstack/react-query";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import { getCabins } from "../services/apiCabins";
import Row from "../ui/Row";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../ui/CreateCabinForm";

function Cabins() {
  const [showAdd, setShowAdd] = useState(false);
  // const [editCabin, setEditCabin] = useState(false);
  const {
    isLoading,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;

  if (error) console.log("Error");

  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading type="h1">Cabins</Heading>
        <p>Filter / Sort</p>
      </div>

      <div className="py-4">
        <table className="w-full border-collapse ">
          <thead>
            <tr>
              <th className="text-stone-600 text-lg">Image</th>
              <th className="text-stone-600 text-lg">Cabin</th>
              <th className="text-stone-600 text-lg">Capacity</th>
              <th className="text-stone-600 text-lg">Price</th>
              <th className="text-stone-600 text-lg">Discount</th>
            </tr>
          </thead>
          <tbody>
            {cabins.map((cabin) => (
              <Row key={cabin.id} cabin={cabin} />
            ))}
          </tbody>
        </table>
      </div>

      {showAdd && <CreateCabinForm />}

      <Button onClick={() => setShowAdd((prevShow) => !prevShow)}>
        {showAdd ? "Close" : "Add Cabin"}
      </Button>
    </div>
  );
}

export default Cabins;

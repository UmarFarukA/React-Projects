import { useQuery } from "@tanstack/react-query";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import { getCabins } from "../services/apiCabins";
import CabinRow from "../features/cabins/CabinRow";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  const [showAdd, setShowAdd] = useState(false);
  const [editId, setEditId] = useState(null);
  const {
    isLoading,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  const onEdit = (id) => {
    // const cabin_to_edit = cabins.filter((cabin) => cabin.id === id);
    setShowAdd(!showAdd);
    setEditId(id);
  };

  if (isLoading) return <Spinner />;

  if (error) console.log("Error");

  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading type="h1">Cabins</Heading>
        <p>Filter / Sort</p>
      </div>

      <div className="py-4">
        <CabinTable>
          {cabins.map((cabin) => (
            <CabinRow
              key={cabin.id}
              cabin={cabin}
              edit={() => onEdit(cabin.id)}
            />
          ))}
        </CabinTable>
      </div>

      {showAdd && <CreateCabinForm editId={editId} cabins={cabins} />}

      {/* {editCabin && <CreateCabinForm />} */}

      <Button onClick={() => setShowAdd((prevShow) => !prevShow)}>
        {showAdd ? "Close" : "Add Cabin"}
      </Button>
    </div>
  );
}

export default Cabins;

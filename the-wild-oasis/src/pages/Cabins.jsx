import { useQuery } from "@tanstack/react-query";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import { getCabins } from "../services/apiCabins";
import CabinRow from "../features/cabins/CabinRow";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import CabinTable from "../features/cabins/CabinTable";
import Modal from "../ui/Modal";
import TableOperations from "../ui/TableOperations";

import { useSearchParams } from "react-router-dom";

function Cabins() {
  const [searchParams] = useSearchParams();
  const [showAdd, setShowAdd] = useState(false);
  const [editId, setEditId] = useState(null);

  const filterValue = searchParams.get("discount") || "all";
  const {
    isLoading,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  const onEdit = (id) => {
    setShowAdd(!showAdd);
    setEditId(id);
  };

  // 1- Filtering Cabins
  let filteredCabins;

  if (filterValue === "all") filteredCabins = cabins;

  if (filterValue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  if (filterValue === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount < 0);
  }

  // Sorting Cabins
  const sortBy = searchParams.get("sortBy") || "created_at";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabin = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  console.log(sortBy);

  if (isLoading) return <Spinner />;

  if (error) console.log("Error");

  return (
    <div className="relative">
      <div className="grid grid-cols-[25rem_1fr]">
        <Heading type="h1">Cabins</Heading>
        <TableOperations />
      </div>

      <div className="py-4">
        <CabinTable>
          {sortedCabin.map((cabin) => (
            <CabinRow
              key={cabin.id}
              cabin={cabin}
              edit={() => onEdit(cabin.id)}
              rowId={cabin.id}
              cabins={sortedCabin}
            />
          ))}
        </CabinTable>
      </div>

      <Modal>
        <Modal.Open modalToOpen="add-cabin">
          <Button
            onClick={() => setShowAdd((prevShow) => !prevShow)}
            type="stretch"
          >
            Add Cabin
          </Button>
        </Modal.Open>
        <Modal.Window
          windowName="add-cabin"
          className="bg-stone-50 px-2 py-4 absolute inset-x-0 top-2 left-3 w-3/4 m-auto border border-gray-300 shadow rounded-md transition-all ease-in-out delay-300 duration-300"
        >
          <CreateCabinForm
            editId={editId}
            cabins={cabins}
            setShowAdd={setShowAdd}
            showAdd={showAdd}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Cabins;

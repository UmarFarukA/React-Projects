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
    setShowAdd(!showAdd);
    setEditId(id);
  };

  if (isLoading) return <Spinner />;

  if (error) console.log("Error");

  return (
    <div className="relative">
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
              rowId={cabin.id}
              cabins={cabins}
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

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import ConfirmDelete from "../../ui/ConfirmDelete";

export default function Row({ cabin, edit, rowId, cabins }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin deleted successfully");
    },

    onError: () => {
      toast.error("Error deleting Cabin");
    },
  });
  const { id, image, name, maxCapacity, regularPrice, discount } = cabin;

  const onDeleteCabin = (cabin_id) => {
    mutation.mutate(cabin_id);
  };
  return (
    <tr className="text-center py-2 space-y-3">
      <td>
        <img src={image} alt="Img" className="h-6 w-6 text-center" />
      </td>
      <td>{name}</td>
      <td>{maxCapacity}</td>
      <td>{regularPrice}</td>
      <td>{discount}</td>
      <td className="flex items-center  space-x-2">
        <Modal>
          <Modal.Open modalToOpen="edit-modal">
            <MdOutlineModeEditOutline
              className="hover:text-indigo-600 font-bold"
              onClick={edit}
            />
          </Modal.Open>
          <Modal.Window
            windowName="edit-modal"
            className="bg-stone-50 px-2 py-4 absolute inset-x-0 top-2 left-3 w-3/4 m-auto border border-gray-300 shadow rounded-md transition-all ease-in-out delay-300 duration-300"
          >
            <CreateCabinForm cabins={cabins} editId={rowId} />
          </Modal.Window>
        </Modal>
        {/* onClick={() => onDeleteCabin(id)} */}
        <Modal>
          <Modal.Open modalToOpen="delete-cabin">
            <MdOutlineDelete className="hover:text-indigo-600 font-bold" />
          </Modal.Open>
          <Modal.Window
            windowName="delete-cabin"
            className="absolute inset-x-0 top-2 left-10 w-3/4 m-auto"
          >
            <ConfirmDelete />
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteCabin from "./useDeleteCabin";

import { useState } from "react";

export default function Row({ cabin, rowId, cabins }) {
  const mutation = useDeleteCabin();
  const { id, image, name, maxCapacity, regularPrice, discount } = cabin;
  const [isEdit, setIsEdit] = useState(false);

  const onDeleteCabin = (cabin_id) => {
    mutation.mutate(cabin_id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
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
      <td className="flex items-center justify-center space-x-2">
        <Modal>
          <Modal.Open modalToOpen="edit-modal">
            <MdOutlineModeEditOutline
              className="hover:text-indigo-600 font-bold"
              onClick={handleEdit}
            />
          </Modal.Open>
          <Modal.Window
            windowName="edit-modal"
            className="absolute top-7 right-6 bg-stone-50 px-2 py-4 inset-x-0  w-3/4 m-auto border border-gray-300 shadow rounded-md transition-all ease-in-out delay-300 duration-300"
          >
            <CreateCabinForm cabins={cabins} editId={rowId} isEdit={isEdit} />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open modalToOpen="delete-cabin">
            <MdOutlineDelete className="hover:text-indigo-600 font-bold " />
          </Modal.Open>
          <Modal.Window
            windowName="delete-cabin"
            className="absolute top-1/2 left-1/4 px-4 py-3 rounded-md flex flex-col items-center justify-center bg-stone-50 shadow border border-stone-300 w-1/4"
          >
            <ConfirmDelete onClick={() => onDeleteCabin(id)} />
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
}

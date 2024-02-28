import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function Row({ cabin, edit }) {
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
        <MdOutlineModeEditOutline
          className="hover:text-indigo-600 font-bold"
          onClick={edit}
        />
        <MdOutlineDelete
          onClick={() => onDeleteCabin(id)}
          className="hover:text-indigo-600 font-bold"
        />
      </td>
    </tr>
  );
}

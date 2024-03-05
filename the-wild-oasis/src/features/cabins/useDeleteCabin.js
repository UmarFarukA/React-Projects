import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteCabin() {
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
  return mutation;
}

export default useDeleteCabin;

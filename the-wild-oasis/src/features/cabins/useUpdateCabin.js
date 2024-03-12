import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useUpdateCabin() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });

      toast.success("Cabin updated successfully");
    },

    onError: () => {
      toast.error("Error in updating cabin");
    },
  });
  return mutation;
}

export default useUpdateCabin;

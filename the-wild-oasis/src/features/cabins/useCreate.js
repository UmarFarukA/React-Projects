import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useCreate() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });

      toast.success("Cabin create successfully");
    },
  });
  return mutation;
}

export default useCreate;

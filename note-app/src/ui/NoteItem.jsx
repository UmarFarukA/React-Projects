import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { deleteNote } from "../services/apiNotes";
import Error from "./Error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function NoteItem({ note }) {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
      toast.success("Note successfully deleted");
    },

    onError: () => <Error message="Error in deleting Note!" />,
  });
  const { id, title, content } = note;

  const handleDelete = async (id) => {
    mutation.mutate(id);
  };

  return (
    <li className="bg-slate-100 w-auto px-4 py-3 rounded-md shadow-sm transition-all flex flex-col gap-2 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <h4 className="text-stone-600 font-bold py-1">{title}</h4>
        <span className="flex items-center space-x-2">
          <NavLink to={`/${id}`}>
            <MdOutlineModeEdit className="text-stone-400" />
          </NavLink>
          <span onClick={() => handleDelete(id)}>
            <MdDeleteOutline className="text-red-600 font-bold" />
          </span>
        </span>
      </div>
      <p className="text-sm text-stone-500">{content}</p>
    </li>
  );
}

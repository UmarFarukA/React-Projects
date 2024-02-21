import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { deleteNote } from "../services/apiNotes";
import Error from "./Error";

export default function NoteItem({ note, onDelete }) {
  // const navigate = useNavigate();
  const { id, title, content } = note;

  const handleDelete = async (id) => {
    const { data, error } = await deleteNote(id);

    if (error) return <Error message="Error in deleting Note!" />;

    onDelete(id);
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

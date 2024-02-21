import { useNavigate, useParams } from "react-router-dom";
import { getNoteById, updateNote } from "../services/apiNotes";
import Error from "../ui/Error";
import Button from "../ui/Button";
import { useEffect, useState } from "react";

export default function Update() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const errors = {};

  useEffect(function () {
    const fetchNote = async () => {
      const { data, err } = await getNoteById(id);
      const { title, content } = data.at(0);
      console.log(title);

      if (err) return <Error message="Error in fetching note!" />;

      if (data) {
        setTitle(title);
        setContent(content);
      }
    };
    fetchNote();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!title) {
      errors.name = "A note title is required";
    }

    if (!content) {
      errors.content = "A note content is required!";
    }

    const { data, err } = await updateNote(id, title, content);

    if (err) return <Error message="An error occured while Updating note" />;

    if (data) {
      navigate("/");
    }
  };

  return (
    <div className="px-3 py-6 md:px-8 w-full md:w-8/12 lg:w-7/12 mx-auto">
      <h3 className="underline text-lg font-bold text-green-500 mb-4">
        Update Note
      </h3>

      <form className="w-full" onSubmit={handleUpdate}>
        <div className="py-4">
          <label className="mb-3 ml-1 text-sm sm:text-lg font-bold text-gray-500">
            Title
          </label>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Enter note title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-gray-200 focus:outline-none focus:ring focus:ring-green-500 rounded-lg px-2 py-2 text-stone-600 w-full"
            />
            <span>
              {errors.name ? (
                <p className="text-sm text-red-400">{errors.name}</p>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-3 ml-1 text-sm sm:text-lg font-bold text-gray-500">
            Content
          </label>
          <div className="mt-2">
            <textarea
              placeholder="Enter note content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="outline-gray-200 focus:outline-none focus:ring focus:ring-green-500 rounded-lg px-3 py-3 text-stone-600 w-full"
            ></textarea>
          </div>
        </div>

        <div className="space-x-4">
          <Button type="primary">Update</Button>
        </div>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { insertNote } from "../services/apiNotes";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const errors = {};

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!title) {
      errors.name = "A note title is required";
    }

    if (!content) {
      errors.content = "A note content is required!";
    }

    const { data, err } = await insertNote(title, content);

    if (err)
      return <Error message="An error occured while creating new note" />;

    if (data) {
      navigate("/");
    }
  };

  function handelReset() {
    setTitle("");
    setContent("");
  }

  return (
    <div className="px-3 py-6 md:px-8 w-full md:w-8/12 lg:w-7/12 mx-auto">
      <h3 className="underline text-lg font-bold text-green-500 mb-4">
        Create New Note
      </h3>

      <form className="w-full" onSubmit={handleAddNote}>
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
          <Button type="primary">Add</Button>
          <Button type="reset" onClick={handelReset}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

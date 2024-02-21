import React, { useEffect, useState } from "react";
import NoteItem from "../ui/NoteItem";
import { getNotes } from "../services/apiNotes";
import Error from "../ui/Error";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await getNotes();
      if (error) {
        setErr(error);
        console.log(err);
      }

      if (data) setNotes(data);
    };

    fetchNotes();
  }, []);

  const onDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  if (err) return <Error message="Unable to fetch Notes" />;

  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

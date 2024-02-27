import React, { useState } from "react";
import NoteItem from "../ui/NoteItem";
import { getNotes } from "../services/apiNotes";
import Error from "../ui/Error";
import { useQuery } from "@tanstack/react-query";
import Loading from "../ui/Loading";

export default function Home() {
  const {
    isLoading,
    error,
    data: notes,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  if (isLoading) return <Loading />;

  if (error) return <Error message="Unable to fetch Notes" />;

  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
}

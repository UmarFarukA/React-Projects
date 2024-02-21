import supabase from "../config/superbase";

export const getNotes = async () => {
  const notes = await supabase.from("notes").select("*");

  return notes;
};

export const getNoteById = async (id) => {
  const note = await supabase.from("notes").select("*").eq("id", id);
  return note;
};

export const insertNote = async (title, content) => {
  const notes = await supabase
    .from("notes")
    .insert([{ title, content }])
    .select();
  return notes;
};

export const updateNote = async (id, title, content) => {
  const note = await supabase
    .from("notes")
    .update({ title: title, content: content })
    .eq("id", id)
    .select();

  return note;
};

export const deleteNote = async (id) => {
  const note = await supabase.from("notes").delete().eq("id", id);
  return note;
};

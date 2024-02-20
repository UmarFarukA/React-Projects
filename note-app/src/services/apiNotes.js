import supabase from "../config/superbase";

export const getNotes = async () => {
  const notes = await supabase.from("notes").select("*");

  return notes;
};

export const getNoteById = async (id) => {
  const note = await supabase.from("notes").eq("id", id).select();
  return note;
};

export const insertNote = async (title, description) => {
  const notes = await supabase
    .from()
    .insert([{ title: title, description: description }])
    .select();
  return notes;
};

export const updateNote = async (id, data) => {
  const note = await supabase
    .from("notes")
    .update({ title: data.title, description: data.description })
    .eq("id", id)
    .select();

  return note;
};

export const deleteNote = async (id) => {
  const note = await supabase.from("notes").delete().eq("id", id);
  return note;
};

import supabase from "../config/supabase";

export const getCabins = async () => {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Error in fetching cabins");

  return cabins;
};

export const createCabin = async (newCabin) => {
  const { data: cabin, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) throw new Error("Error in Inserting new cabin");

  return cabin;
};

export const deleteCabin = async (id) => {
  const cabin = await supabase.from("cabins").delete().eq("id", id);

  return cabin;
};

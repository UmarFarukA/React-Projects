import supabase from "../config/supabase";

export const getCabin = async (id) => {
  const { data: cabin, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id);

  if (error) throw new Error("Error reading cabin");
  return cabin;
};

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

export const updateCabin = async (id) => {
  const { data, error } = await supabase
    .from("cabins")
    .update({ other_column: "otherValue" })
    .eq("id", id)
    .select();

  if (error) throw new Error("Error in updating cabin");

  return data;
};

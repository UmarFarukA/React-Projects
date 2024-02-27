import supabase from "../config/supabase";

export const getCabins = async () => {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Error in fetching cabins");

  return cabins;
};

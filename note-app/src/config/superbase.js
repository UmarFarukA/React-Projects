import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = process.env.SUPABASE_URL;
const supabaseUrl = "https://qbycbrdoljptdtkastex.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFieWNicmRvbGpwdGR0a2FzdGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzI2MTYsImV4cCI6MjAyNDAwODYxNn0.U1IlwPUigM_6BAhZtbiTLqgbpacoHk0ryaoYKH3RZ9s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

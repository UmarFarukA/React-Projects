import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ncqfvxlsppmkmelhmvhg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcWZ2eGxzcHBta21lbGhtdmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NDYyMzEsImV4cCI6MjAyNDAyMjIzMX0.NeFVtviF7Cr6ngqSymE2hhVvgiVC9wYwfCh1oRtfajM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

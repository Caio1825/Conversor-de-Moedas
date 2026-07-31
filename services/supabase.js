import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://couoplapxivazfhvdizq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvdW9wbGFweGl2YXpmaHZkaXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4MTUwODIsImV4cCI6MjEwMDM5MTA4Mn0.NClRdc9af2bjIL4y2hwECDqig6YLv5zTynjeprxlGJs";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
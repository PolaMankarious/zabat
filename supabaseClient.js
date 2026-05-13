import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bjxacoboglvcjmqglncw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqeGFjb2JvZ2x2Y2ptcWdsbmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MTMwMzksImV4cCI6MjA5NDE4OTAzOX0.1sEjVcvl10-b-FNc_yT3GJcsNUuG7EseQsS9gfGFE4Q";
export const supabase = createClient(supabaseUrl, supabaseKey);

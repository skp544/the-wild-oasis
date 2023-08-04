import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wkjqiyjgllamggnfzkdz.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndranFpeWpnbGxhbWdnbmZ6a2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4Nzc4NDcsImV4cCI6MjAwNjQ1Mzg0N30.VW7jGwzSs4XnuR4qH0dWYESkkvojLxr9sjBQDqI-NsE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

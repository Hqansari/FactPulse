import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hisyehbkzsrirbcigsnx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpc3llaGJrenNyaXJiY2lnc254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NzMwNTYsImV4cCI6MjA3MjE0OTA1Nn0.ZRzyfYc47W1d6F6XV0gDgjBYzUgcZ8r2-9OnI3d4B6s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

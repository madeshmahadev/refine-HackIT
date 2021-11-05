import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://lijdueazstasjzzbdafe.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjAyODk4MSwiZXhwIjoxOTUxNjA0OTgxfQ.oXlIvxLQuFpL6NpKfNiY_VupFs1fn1ABbGtE-CV47Tg";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

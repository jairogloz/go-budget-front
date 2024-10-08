import { createClient } from "@supabase/supabase-js";
import config from "../../config";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  config.supabaseURL,
  config.supabaseAnonKey
);

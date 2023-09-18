import Airtable from "airtable";
import { createClient } from "@supabase/supabase-js";
import { ServerClient } from "postmark/dist";

export const AirtableService = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
});

export const SupabaseService = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export const PostmarkService = new ServerClient(process.env.POSTMARK_KEY);

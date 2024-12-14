// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ujwvsfwvpqnwmozubigr.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqd3ZzZnd2cHFud21venViaWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMTU1NzUsImV4cCI6MjAyNDc5MTU3NX0.YxIBPPOx9aRt8_EiQpCyH_MH1dHvCM83z3i7dtWyfGY'; // Din Supabase Anonym Key

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
        
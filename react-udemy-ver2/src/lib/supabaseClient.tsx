import { createClient } from '@supabase/supabase-js'
import { Database } from './schema'

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://qdeklayajgbliwpxbwjf.supabase.co';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkZWtsYXlhamdibGl3cHhid2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1Nzk0NDEsImV4cCI6MjA1MDE1NTQ0MX0.hVoJFyB_a8PD0PoLFgu68VrHWgi84Y-sz4v8ApjqtFQ';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
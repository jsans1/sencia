import { createClient } from '@supabase/supabase-js'

   const supabaseUrl = 'https://qnhkgzgqjaulddorqkpo.supabase.co'
   const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaGtnemdxamF1bGRkb3Jxa3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyNDc4NjMsImV4cCI6MjA2NDgyMzg2M30.3UdoqHnC7GnAuULKwgYrqEbydpDnY3ChgDNtawsh_Fw'
   export const supabase = createClient(supabaseUrl, supabaseAnonKey)
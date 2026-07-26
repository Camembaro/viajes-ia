import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ciriiivqvwuuqjcubgir.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpcmlpaXZxdnd1dXFqY3ViZ2lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MDE3MjgsImV4cCI6MjEwMDE3NzcyOH0.d7hP4K8xgnrCs2INe2lcoOef8r2xc4M0JxiTJTGKHh8'


export const supabase = createClient(supabaseUrl, supabaseAnonKey)


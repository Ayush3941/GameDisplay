import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'YOUR-SUPABASE-URL',
  'YOUR-SUPABASE-API'
 );

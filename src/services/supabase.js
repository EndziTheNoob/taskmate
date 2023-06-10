import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://hijydirnxllxmabmoksm.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_TOKEN,
);

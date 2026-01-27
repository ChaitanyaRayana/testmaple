// app/actions/webinar.ts
'use server';

// import { supabase } from '../utils/service/client';
import { supabaseServer } from '../../lib/supabase/server';

export async function submitWebinarForm(data) {
  const tableName = process.env.NEXT_PUBLIC_WEBINARTABLENAME;

  const { error } = await supabaseServer.from(tableName).insert([
    {
      ...data,
      form_type: 'webinar',
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }
}

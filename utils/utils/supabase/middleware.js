import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options); // SupabaseResponse'a ekle
          });
        },
      },
    }
  );

  try {
    // Refreshing the auth token
    await supabase.auth.getUser();
  } catch (error) {
    console.error('Error refreshing auth token:', error);
    // Gerekirse hatayı yönlendir veya başka bir şey yap
  }

  return supabaseResponse;
}

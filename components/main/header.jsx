import { createClient } from "@/utils/utils/supabase/server";

export default async function MainHeader() {
  const supabase = createClient();
  const { data: { user } } = supabase.auth.getUser();
  console.log(data);
  return(
    <header>
        <ul className="flex gap-1 items-center">
            <li>Anasayfa</li>
            <li>Hakkımızda</li>
            <li>İletişim</li>
        </ul>
        <ul>
           {user ? (
            <ul className="inline-flex gap-3 items-center">
            <li>hoşgeldin, {user.email}</li>
            <li>
                <form action={signout}>
                    <button>Çıkış Yap</button>
                </form>
            </li>
            </ul>
           ) : (
            <>
            <li>
                <Link href={"/login"}>
                giriş yap
                </Link>
                </li>
                <Link href={"/login"}>
            <li>kayıt ol</li>
            </Link>
            </>
           )}
        </ul>
    </header>
  )
}

export async function signOut(){
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
}
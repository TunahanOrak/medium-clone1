import { createClient } from "@/utils/supabase/server"
import { notFound } from "next/navigation";

export default async function PostDetailPage({ params }) {
    const { data, error } = await supabase.form("posts")
    .select()
    .eq("id", params.id)
    .single();

    if(!data) return notFound();
    return(
        <div>
            <h1>Yazı Başlığı</h1>
        </div>
    )
} f
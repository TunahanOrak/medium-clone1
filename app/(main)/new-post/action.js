"use server"

import { redirect } from "next/dist/server/api-utils";

export async function SavePost(formData){
    const title = formData.get("title");
    const content = formData.get("content");
    const supabase = createClient();

    const { data : { user } } = supabase.auth.getUser(); 

    if(!user){
        redirect("/login")
    }

    const { data, error } = await supabase
  .from('posts')
  .insert({ title, content, user_id: user.id })
  .select()

  if(error) {
    console.log(error);
  }

  redirect(`/posts/${data.id}`)

} f
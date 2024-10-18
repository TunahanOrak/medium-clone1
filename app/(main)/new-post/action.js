"use server"

export async function SavePost(formData){
    const title = formData.get("title");
    const content = formData.get("content");
    const supabase = createClient();

    const { data : { user } } = supabase.auth.getUser(); 

    const { error } = await supabase
  .from('posts')
  .insert({ title, content, user_id: user.id })

  if(error) {
    console.log(error);
  }

}
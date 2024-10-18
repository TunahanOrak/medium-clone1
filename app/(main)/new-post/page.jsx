export default function NewPost(){
return(
    <div>
    <form action={SavePost}>
    <input type="text" name="title" placeholder="Yazı Başlığı" />
    <br />
    <textarea name="content" id="" placeholder="yazı içeriği"></textarea>
    <br />
    <button> Yazıyı Paylaş </button>
    </form>
    </div>
)
}
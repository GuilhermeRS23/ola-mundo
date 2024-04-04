import style from "./Post.module.css";

const Post = ({ post }) => {
    
    return (
        <div className={style.post}>
            <img
                className={style.capa}
                src={`assets/posts/${post.id}/capa.png`}
                alt="Imagem de Capa"
            />

            <h2 className={style.titulo}>{post.titulo}</h2>
            <button className={style.botaoLer}>Ler</button>
        </div>
    )
}

export default Post;

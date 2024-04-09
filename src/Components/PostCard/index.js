import { Link } from "react-router-dom";
import style from "./PostCard.module.css";
import Botao from "Components/Botao";

const PostCard = ({ post }) => {

    return (

        <Link to={`/posts/${post.id}`}>
            <div className={style.post}>
                <img
                    className={style.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de Capa"
                />

                <h2 className={style.titulo}>{post.titulo}</h2>
                <Botao >Ler </Botao>
            </div>
        </Link>
    )
}

export default PostCard;

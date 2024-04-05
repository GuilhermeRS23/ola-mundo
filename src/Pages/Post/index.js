import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModeloPost from "Components/ModeloPost";
import ReactMarkdown from "react-markdown";

import "./Post.css";
import Erro404 from "Pages/Erro404";

const Post = () => {
    const parametro = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametro.id);
    })

    if (!post) {
        return  <Erro404 />
    }

    return (
        <ModeloPost
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
            
        </ModeloPost>
    )
}

export default Post;

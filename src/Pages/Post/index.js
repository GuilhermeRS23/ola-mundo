import ModeloPost from "Components/ModeloPost";
import LayoutPadrao from "Components/LayoutPadrao";
import Erro404 from "Pages/Erro404";

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';

import posts from "json/posts.json";
import style from './Post.module.css';
import "./Post.css";
import PostCard from "Components/PostCard";

const Post = () => {
    const parametro = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametro.id);
    })

    if (!post) {
        return <Erro404 />
    }

    // Metodo para separar os artigos
    const postsRecomendados = posts.filter((post) => post.id !== Number(parametro.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);


    return (
        <LayoutPadrao>
            <ModeloPost
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                {/* Seção de artigos recomendados */}
                <h2 className={style.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>

                <ul className={style.postsRecomendados}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>

            </ModeloPost>
        </LayoutPadrao>
    )
}

export default Post;


//Outro solução para Página de erro sem Banner
// <Routes>
//     <Route path='*' element={<LayoutPadrao />}>
//         <Route index element={
// Modelo Post
//         }>
//         </Route>
//     </Route>
// </Routes>
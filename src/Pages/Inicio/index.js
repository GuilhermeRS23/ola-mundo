import PostCard from "Components/PostCard";
import style from "Pages/Inicio/Inicio.module.css";
import posts from 'json/posts.json';

const Inicio = () => {
    return (
        <ul className={style.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
}

export default Inicio;

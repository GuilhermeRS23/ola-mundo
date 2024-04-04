import Banner from "Components/Banner";
import Post from "Components/Post";
import style from "Pages/Inicio/Inicio.module.css";
import posts from 'json/posts.json';

const Inicio = () => {
    return (
        <ul className={style.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    )
}

export default Inicio;

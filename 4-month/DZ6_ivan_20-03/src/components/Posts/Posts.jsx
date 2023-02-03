import { useState, useEffect } from "react";
import makeQuery from "../../makeQuery";
import Comments from "../Comments/Comments";
import Loading from "../Loading/Loading";
import styles from "./posts.module.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [clickedPost, setClickedPost] = useState(0);
  const [isOk, setIsOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const url = `posts`;
    makeQuery(setPosts, url, setIsOk, setIsLoading, setIsError);
  }, []);

  const clickHandler = (id) => {
    clickedPost === id ? setClickedPost(0) : setClickedPost(id);
  };

  return (
    <ul className={styles.posts}>
      {isLoading && <Loading />}
      {isOk &&
        posts.map((post) => (
          <li key={post.id} className={styles.post}>
            <div>
              <h2>{post.title}</h2>
              <button onClick={() => clickHandler(post.id)}>Comments</button>
            </div>
            {clickedPost === post.id && <Comments postId={post.id} />}
          </li>
        ))}
      {isError && <h1 style={{ color: "red" }}>Что-то пошло не так</h1>}
    </ul>
  );
}

export default Posts;
